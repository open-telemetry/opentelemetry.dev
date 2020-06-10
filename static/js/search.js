summaryInclude = 60;
var fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.1,
  tokenize: true,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "title", weight: 0.8 },
    { name: "description", weight: 0.5 },
    { name: "tags", weight: 0.3 },
    { name: "categories", weight: 0.3 }
  ]
};

var searchQuery = param("s");
if (searchQuery) {
  $("#search-query").val(searchQuery);
  $("#default-body").hide();
  executeSearch(searchQuery);
} else {
  if ($("#default-body").is(":hidden")) {
    $("#default-body").show();
  }
}

function toggleResultsVisibility() {
  $("#default-body").toggle();
}

function executeSearch(searchQuery) {
  $.getJSON("/registry/index.json", function(data) {
    var pages = data;
    var fuse = new Fuse(pages, fuseOptions);
    var result = fuse.search(searchQuery);
    console.log({ matches: result });
    if (result.length > 0) {
      populateResults(result);
    } else {
      $("#search-results").append("<p>No matches found</p>");
    }
  });
}

function populateResults(result) {
  $.each(result, function(key, value) {
    var contents = value.item.description;
    var snippet = "";
    var snippetHighlights = [];
    var tags = [];
    if (fuseOptions.tokenize) {
      snippetHighlights.push(searchQuery);
    } else {
      $.each(value.matches, function(matchKey, mvalue) {
        if (mvalue.key == "tags" || mvalue.key == "categories") {
          snippetHighlights.push(mvalue.value);
        } else if (mvalue.key == "description") {
          start =
            mvalue.indices[0][0] - summaryInclude > 0
              ? mvalue.indices[0][0] - summaryInclude
              : 0;
          end =
            mvalue.indices[0][1] + summaryInclude < contents.length
              ? mvalue.indices[0][1] + summaryInclude
              : contents.length;
          snippet += contents.substring(start, end);
          snippetHighlights.push(
            mvalue.value.substring(
              mvalue.indices[0][0],
              mvalue.indices[0][1] - mvalue.indices[0][0] + 1
            )
          );
        }
      });
    }

    if (snippet.length < 1 && contents.length > 0) {
      snippet += contents.substring(0, summaryInclude * 2);
    }
    //pull template from hugo template definition
    var templateDefinition = $("#search-result-template").html();
    //replace values
    var output = render(templateDefinition, {
      key: key,
      title: value.item.title,
      link: value.item.permalink,
      tags: value.item.tags,
      categories: value.item.categories,
      description: value.item.description,
      repo: value.item.repo,
      registryType: value.item.registryType,
      language: value.item.language,
      snippet: snippet,
      otVersion: value.item.otVersion
    });
    $("#search-results").append(output);
  });
}

function param(name) {
  return decodeURIComponent(
    (location.search.split(name + "=")[1] || "").split("&")[0]
  ).replace(/\+/g, " ");
}

function render(templateString, data) {
  var conditionalMatches, conditionalPattern, copy;
  conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
  //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
  copy = templateString;
  while (
    (conditionalMatches = conditionalPattern.exec(templateString)) !== null
  ) {
    if (data[conditionalMatches[1]]) {
      //valid key, remove conditionals, leave contents.
      copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
    } else {
      //not valid, remove entire section
      copy = copy.replace(conditionalMatches[0], "");
    }
  }
  templateString = copy;
  //now any conditionals removed we can do simple substitution
  var key, find, re;
  for (key in data) {
    find = "\\$\\{\\s*" + key + "\\s*\\}";
    re = new RegExp(find, "g");
    templateString = templateString.replace(re, data[key]);
  }
  return templateString;
}

// listeners, etc
let selectedLanguage = "all";
let selectedComponent = "all";

document.addEventListener('input', function(event) {
  if (event.target.id === 'componentFilter') {
    selectedComponent = event.target.value
  } 
  if (event.target.id === 'languageFilter') {
    selectedLanguage = event.target.value
  }
  updateFilters();
});

function updateFilters() {
  let allItems = [...document.getElementsByClassName("component")];
  if (selectedComponent === "all" && selectedLanguage === "all" ){
    allItems.forEach(element => element.classList.remove("is-hidden"))
  } else {
    allItems.forEach(element => {
      const dc = element.dataset.registrytype;
      const dl = element.dataset.registrylanguage;
      if ((dc === selectedComponent || selectedComponent === "all") && (dl === selectedLanguage || selectedLanguage === "all")){
        element.classList.remove("is-hidden")
      } else if (dc === selectedComponent && dl !== selectedLanguage) {
        element.classList.add("is-hidden")
      } else if (dl === selectedLanguage && dc !== selectedComponent) {
        element.classList.add("is-hidden")
      } else {
        element.classList.add("is-hidden")
      }
    });
  }
}
