//-- searchProfessionalSpecialist.js v14 --
//-- Autocomplete  script --

var searchDropDownFlag = false;

function consultantSearch(term) {
    if (term.length < 2) {
        document.getElementById('tempBin').innerHTML = "You must enter at least 2 characters of a patients name!";
        return false;
    }

    tmpBin = document.getElementById('tempBin');

    loaderImg(tmpBin);

    var request = new XMLHttpRequest();

    request.open('GET', '../oscarEncounter/oscarConsultationRequest/searchProfessionalSpecialist.json?keyword=' + term, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {

        var data = this.response;
        var results_html = "";
        if (request.status >= 200 && request.status < 400) {

            // Request finished. Do processing here.
            var data = JSON.parse(this.response);
            var results_html = "";
            if (data.length > 0) {
                results_html += "<ul class=\"custom-dropdown\">";
                for (i = 0; i <= data.length - 1; i++) {
                    results_html += "<li onclick=\"populateInputField(this, 'consultant')\" data-id=\"" + data[i].id + " \" data-address=\"" + data[i].streetAddress + ' \nFax: ' + data[i].fax + "\">" + data[i].lastName + ", " + data[i].firstName + "</li>";
                }
                results_html += "</ul>";
            } else {
                results_html = "No results found matching <b>" + term + "</b>.";
            }


            //ensure the loader has time to display
            setTimeout(() => {
                document.getElementById('tempBin').innerHTML = results_html;
            }, 500);


        } else {
            // Not all OSCAR forks support autocomplete.
            console.log('search error.');
            searchDropDownFlag = false;
            toggleTempBin(0, null);
        }

    } // end onload

    request.send();
}


function populateInputField(el, type) {

    document.getElementById("referral_name").value = el.firstChild.data;

    if (type == "consultant")
        document.getElementById("consultantFilter").value = el.getAttribute("data-id").trim();

    //auto check copyto if not checked
    if (document.getElementById('chkCopyToPhysician').value.toLowerCase() != 'x') {
        flip('chkCopyToPhysician');
    }

    //populate address: possible names = referral_address
    document.getElementById("CopyTo").value = el.getAttribute("data-address").trim();

    searchDropDownFlag = false;
    toggleTempBin(0, null);
}


function toggleTempBin(a, parentElement) {
    if (a === 1) {

        position = getOffset(document.getElementById(parentElement));

        new_top = position.top + document.getElementById(parentElement).offsetHeight
        new_left = position.left - 10;
        document.getElementById("tempBin").style.top = "341px";
        document.getElementById("tempBin").style.left = "26px";
        document.getElementById("tempBin").style.width = document.getElementById(parentElement).offsetWidth + "px";
        document.getElementById("tempBin").style.display = 'block';

    } else if (a === 0 && searchDropDownFlag === false) {
        document.getElementById("tempBin").style.display = 'none';
        document.getElementById("tempBin").innerHTML = "You must enter at least 2 characters of a patients name!";
    }
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
}


function loaderImg(bin) {
    bin.innerHTML = "";
    var img = document.createElement('img');
    img.src = '../images/loader.gif';
    img.style.marginLeft = "40%";
    bin.appendChild(img);
}


function tempBinHover(h) {

    if (h) {
        searchDropDownFlag = true;
    } else {
        searchDropDownFlag = false;
    }
}
