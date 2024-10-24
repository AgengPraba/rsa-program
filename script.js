function setActiveLink(event) {
  // Menghapus class 'active' dan aria-current dari semua elemen
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });

  // Menambahkan class 'active' dan aria-current ke elemen yang di-klik
  event.target.classList.add("active");
  event.target.setAttribute("aria-current", "page");
}

// Menambahkan event listener untuk setiap item menu
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", setActiveLink);
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.getElementById("copy-icon").addEventListener("click", function () {
  // Enable textarea temporarily to allow copying
  const textarea = document.getElementById("cipher-text");
  textarea.disabled = false;

  // Get the content from the textarea
  const textToCopy = textarea.value;

  // Copy to clipboard
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      // Change icon to bi-clipboard-check
      const icon = document.getElementById("copy-icon");
      icon.classList.remove("bi-clipboard");
      icon.classList.add("bi-clipboard-check");

      // Update tooltip to 'Copied!'
      const tooltip = bootstrap.Tooltip.getInstance(icon); // Get tooltip instance
      tooltip.setContent({ ".tooltip-inner": "Copied!" }); // Update tooltip content

      // Disable textarea again
      textarea.disabled = true;
    })
    .catch(function (err) {
      console.error("Error copying text: ", err);
    });
});

document.getElementById("copy-icon-2").addEventListener("click", function () {
  // Enable textarea temporarily to allow copying
  const textarea = document.getElementById("plain-text");
  textarea.disabled = false;

  // Get the content from the textarea
  const textToCopy = textarea.value;

  // Copy to clipboard
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      // Change icon to bi-clipboard-check
      const icon = document.getElementById("copy-icon-2");
      icon.classList.remove("bi-clipboard");
      icon.classList.add("bi-clipboard-check");

      // Update tooltip to 'Copied!'
      const tooltip = bootstrap.Tooltip.getInstance(icon); // Get tooltip instance
      tooltip.setContent({ ".tooltip-inner": "Copied!" }); // Update tooltip content

      // Disable textarea again
      textarea.disabled = true;
    })
    .catch(function (err) {
      console.error("Error copying text: ", err);
    });
});

$(document).ready(function () {
  // Fungsi untuk format hasil pencarian
  function formatResult(number) {
    if (!number.id) return number.text;
    return $("<span>" + number.text + "</span>");
  }

  // Fungsi untuk format item terpilih
  function formatSelection(number) {
    return number.text;
  }

  // Custom matcher untuk pencarian
  function customMatcher(params, data) {
    // Jika tidak ada term pencarian, kembalikan semua data
    if ($.trim(params.term) === "") {
      return data;
    }

    // Skip jika tidak ada properti 'text'
    if (typeof data.text === "undefined") {
      return null;
    }

    // Cek apakah data.text mengandung term pencarian
    if (data.text.toLowerCase().indexOf(params.term.toLowerCase()) > -1) {
      return data;
    }

    return null;
  }

  // Inisialisasi Select2
  $(".select2-p").select2({
    placeholder: "-- Select a number --",
    allowClear: true,
    data: bil_prima.map((number) => ({
      id: number,
      text: number.toString(),
    })),
    minimumResultsForSearch: 1,
    matcher: customMatcher,
    templateResult: formatResult,
    templateSelection: formatSelection,
    // Tambahan konfigurasi
    dropdownParent: $(".container"),
    width: "100%",
    // Event handlers
    language: {
      noResults: function () {
        return "No numbers found";
      },
    },
  });

  // Event handlers
  $(".select2-p").on("select2:select", function (e) {
    console.log("Selected number:", e.params.data.text);
  });

  $(".select2-p").on("select2:unselect", function (e) {
    console.log("Unselected number:", e.params.data.text);
  });
});

$(document).ready(function () {
  // Fungsi untuk format hasil pencarian
  function formatResult(number) {
    if (!number.id) return number.text;
    return $("<span>" + number.text + "</span>");
  }

  // Fungsi untuk format item terpilih
  function formatSelection(number) {
    return number.text;
  }

  // Custom matcher untuk pencarian
  function customMatcher(params, data) {
    // Jika tidak ada term pencarian, kembalikan semua data
    if ($.trim(params.term) === "") {
      return data;
    }

    // Skip jika tidak ada properti 'text'
    if (typeof data.text === "undefined") {
      return null;
    }

    // Cek apakah data.text mengandung term pencarian
    if (data.text.toLowerCase().indexOf(params.term.toLowerCase()) > -1) {
      return data;
    }

    return null;
  }

  // Inisialisasi Select2
  $(".select2-q").select2({
    placeholder: "-- Select a number --",
    allowClear: true,
    data: bil_prima.map((number) => ({
      id: number,
      text: number.toString(),
    })),
    minimumResultsForSearch: 1,
    matcher: customMatcher,
    templateResult: formatResult,
    templateSelection: formatSelection,
    // Tambahan konfigurasi
    dropdownParent: $(".container"),
    width: "100%",
    // Event handlers
    language: {
      noResults: function () {
        return "No numbers found";
      },
    },
  });

  // Event handlers
  $(".select2-p").on("select2:select", function (e) {
    console.log("Selected number:", e.params.data.text);
  });

  $(".select2-p").on("select2:unselect", function (e) {
    console.log("Unselected number:", e.params.data.text);
  });
});
