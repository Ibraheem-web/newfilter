document.addEventListener('DOMContentLoaded', () => {
  const typeBtn = document.getElementById('type-button')
  const typeMenu = document.getElementById('type-menu');
  const subBtn = document.getElementById('sub-type-button');
  const subMenu = document.getElementById('sub-type-menu');
  const clearAll = document.getElementById('clearAll');
  const checkBox = document.querySelectorAll('input[type="checkbox"]');
  const filterHeading = document.getElementById('filter-heading');
  const filter = document.getElementById('filter-dropdown');
  const moreFilter = document.getElementById('more-filter');
  const filterOptions = document.getElementById('filter-options');
  const fromSlider2 = document.querySelector('#fromSlider2');
  const toSlider2 = document.querySelector('#toSlider2');
  const fromInput2 = document.querySelector('#fromInput2');
  const toInput2 = document.querySelector('#toInput2');
  const fromSlider3 = document.querySelector('#fromSlider3');
  const toSlider3 = document.querySelector('#toSlider3');
  const fromInput3 = document.querySelector('#fromInput3');
  const toInput3 = document.querySelector('#toInput3');
  const fromSlider4 = document.querySelector('#fromSlider4');
  const toSlider4 = document.querySelector('#toSlider4');
  const fromInput4 = document.querySelector('#fromInput4');
  const toInput4 = document.querySelector('#toInput4');
  const input = document.getElementById("combobox");
  const suggestions = document.getElementById("suggestions");
  let fetchedData = [];

  // TYPE FUNCTIONALITY

  typeBtn.addEventListener('click', () => {
    typeMenu.classList.toggle('hidden')
  });

  document.addEventListener('click', (move) => {
    if (!typeBtn.contains(move.target) && !typeMenu.contains(move.target)) {
      typeMenu.classList.add('hidden')
    }
  });

  typeBtn.addEventListener('click', (mover) => {
    mover.stopPropagation();
  });

  // SUBTYPE FUNCTIONALITY

  subBtn.addEventListener('click', () => {
    subMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (room) => {
    if (!subBtn.contains(room.target) && !subMenu.contains(room.target)) {
      subMenu.classList.add('hidden')
    };
  });

  subBtn.addEventListener('click', (gum) => {
    gum.stopPropagation();
  });

  // CLEAR ALL FUNCTIONALITY

  clearAll.addEventListener('click', () => {
    checkBox.forEach(checkboxs => {
      checkboxs.checked = false;
      clearAll.style.display = 'none';
    })
  });

  // FILTER FUNCTIONALITY

  filterHeading.addEventListener('click', () => {
    filter.classList.toggle('hidden');
  });

  // MORE FILTER 

  moreFilter.addEventListener('click', () => {
    filterOptions.classList.toggle('hidden');
  });

  // CEAR ALL BUTTON DISPLAY FUNCTIONALITY
  
  checkBox.forEach(cheackbox => {
      cheackbox.addEventListener('change', () => {
        const anyCheck = Array.from(checkBox).some(cheackbox => cheackbox.checked);
        if (anyCheck) {
          clearAll.style.display = 'block';
        } else {
          clearAll.style.display = 'none';
        }
      });
  });

  // AUTOCOMPLETE SUGGESTIONS
  // Define an array of available options (you can replace this with your own data)
const availableOptions = [
  "New York",
  "Los Angeles",
  "Chicago",
  "San Francisco",
  "Seattle",
  "Boston",
  "Austin",
  // Add more options as needed
];

// Event listener for input changes
input.addEventListener("input", function () {
  const inputValue = input.value.toLowerCase();
  suggestions.innerHTML = ""; // Clear previous suggestions

  if (inputValue.length === 0) {
    return;
  }

  const matchingOptions = availableOptions.filter((option) =>
    option.toLowerCase().includes(inputValue)
  );

  if (matchingOptions.length > 0) {
    matchingOptions.forEach((option) => {
      const suggestion = document.createElement("div");
      suggestion.textContent = option;
      suggestion.classList.add("suggestion-item");
      suggestion.addEventListener("click", () => {
        input.value = option;
        suggestions.innerHTML = ""; // Clear suggestions on selection
      });
      suggestions.appendChild(suggestion);
    });
  }
});

// Close suggestions when clicking outside the input
document.addEventListener("click", function (event) {
  if (event.target !== input) {
    suggestions.innerHTML = "";
  }
});

  // MULTIRANGE SLIDER 

  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider2 = document.querySelector('#toSlider2');
    if (Number(currentTarget.value) <= 0) {
      toSlider2.style.zIndex = 2;
    } else {
      toSlider2.style.zIndex = 0;
    }
  }

  fromSlider2.oninput = () => controlFromSlider(fromSlider2, toSlider2, fromInput2);
  toSlider2.oninput = () => controlToSlider(fromSlider2, toSlider2, toInput2);
  fromInput2.oninput = () => controlFromInput(fromSlider2, fromInput2, toInput2, toSlider2);
  toInput2.oninput = () => controlToInput(toSlider2, fromInput2, toInput2, toSlider2);

  function controlFromInput3(fromSlider3, fromInput3, toInput3, controlSlider3) {
    const [from, to] = getParsed(fromInput3, toInput3);
    fillSlider(fromInput3, toInput3, '#C6C6C6', '#25daa5', controlSlider3);
    if (from > to) {
      fromSlider3.value = to;
      fromInput3.value = to;
    } else {
      fromSlider3.value = from;
    }
  }

  function controlToInput3(toSlider3, fromInput3, toInput3, controlSlider3) {
    const [from, to] = getParsed(fromInput3, toInput3);
    fillSlider(fromInput3, toInput3, '#C6C6C6', '#25daa5', controlSlider3);
    setToggleAccessible(toInput3);
    if (from <= to) {
      toSlider3.value = to;
      toInput3.value = to;
    } else {
      toInput3.value = from;
    }
  }

  function controlFromSlider3(fromSlider3, toSlider3, fromInput3) {
    const [from, to] = getParsed(fromSlider3, toSlider3);
    fillSlider(fromSlider3, toSlider3, '#C6C6C6', '#25daa5', toSlider3);
    if (from > to) {
      fromSlider3.value = to;
      fromInput3.value = to;
    } else {
      fromInput3.value = from;
    }
  }

  function controlToSlider3(fromSlider3, toSlider3, toInput3) {
    const [from, to] = getParsed(fromSlider3, toSlider3);
    fillSlider(fromSlider3, toSlider3, '#C6C6C6', '#25daa5', toSlider3);
    setToggleAccessible(toSlider3);
    if (from <= to) {
      toSlider3.value = to;
      toInput3.value = to;
    } else {
      toInput3.value = from;
      toSlider3.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider3 = document.querySelector('#toSlider3');
    if (Number(currentTarget.value) <= 0) {
      toSlider3.style.zIndex = 2;
    } else {
      toSlider3.style.zIndex = 0;
    }
  }

  fromSlider3.oninput = () => controlFromSlider3(fromSlider3, toSlider3, fromInput3);
  toSlider3.oninput = () => controlToSlider3(fromSlider3, toSlider3, toInput3);
  fromInput3.oninput = () => controlFromInput3(fromSlider3, fromInput3, toInput3, toSlider3);
  toInput3.oninput = () => controlToInput3(toSlider3, fromInput3, toInput3, toSlider3);

  function controlFromInput4(fromSlider4, fromInput4, toInput4, controlSlider4) {
    const [from, to] = getParsed(fromInput4, toInput4);
    fillSlider(fromInput4, toInput4, '#C6C6C6', '#25daa5', controlSlider4);
    if (from > to) {
      fromSlider4.value = to;
      fromInput4.value = to;
    } else {
      fromSlider4.value = from;
    }
  }

  function controlToInput4(toSlider4, fromInput4, toInput4, controlSlider4) {
    const [from, to] = getParsed(fromInput4, toInput4);
    fillSlider(fromInput4, toInput4, '#C6C6C6', '#25daa5', controlSlider4);
    setToggleAccessible(toInput4);
    if (from <= to) {
      toSlider4.value = to;
      toInput4.value = to;
    } else {
      toInput4.value = from;
    }
  }

  function controlFromSlider4(fromSlider4, toSlider4, fromInput4) {
    const [from, to] = getParsed(fromSlider4, toSlider4);
    fillSlider(fromSlider4, toSlider4, '#C6C6C6', '#25daa5', toSlider4);
    if (from > to) {
      fromSlider4.value = to;
      fromInput4.value = to;
    } else {
      fromInput4.value = from;
    }
  }

  function controlToSlider4(fromSlider4, toSlider4, toInput4) {
    const [from, to] = getParsed(fromSlider4, toSlider4);
    fillSlider(fromSlider4, toSlider4, '#C6C6C6', '#25daa5', toSlider4);
    setToggleAccessible(toSlider4);
    if (from <= to) {
      toSlider4.value = to;
      toInput4.value = to;
    } else {
      toInput4.value = from;
      toSlider4.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider4 = document.querySelector('#toSlider4');
    if (Number(currentTarget.value) <= 0) {
      toSlider4.style.zIndex = 2;
    } else {
      toSlider4.style.zIndex = 0;
    }
  }

  fromSlider4.oninput = () => controlFromSlider4(fromSlider4, toSlider4, fromInput4);
  toSlider4.oninput = () => controlToSlider4(fromSlider4, toSlider4, toInput4);
  fromInput4.oninput = () => controlFromInput4(fromSlider4, fromInput4, toInput4, toSlider4);
  toInput4.oninput = () => controlToInput4(toSlider4, fromInput4, toInput4, toSlider4);

  // FILTER
  fromSlider2.addEventListener('input', updateCards);
  toSlider2.addEventListener('input', updateCards);

  function updateCards() {
    const fromValue = parseInt(fromSlider2.value, 10);
    const toValue = parseInt(toSlider2.value, 10);

    fetchedData.forEach(cards => {
      const floor = parseInt(cards.floor, 10);

      if (floor >= fromValue && floor <= toValue) {
        cards.style.display = 'block';
      } else {
        cards.style.display = 'none';
      }
    })
  }

  cardFiles.forEach(fileName => {
    let jsonPath = '/cards/' + fileName;

    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        fetchedData.push(data);
      })
      .catch(error => {
        console.error('error fetching JSON:' , error);
      })
    });
});