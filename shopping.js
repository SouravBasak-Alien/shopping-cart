// Phone Hide
const removeOne = document.getElementById("removeOne").addEventListener("click", function () {
  const cartOne = document.getElementById("cartOne");
  cartOne.style.display = "none";
});

// case Hide
const removeTwo = document.getElementById("removeTwo").addEventListener("click", function () {
    const cartTwo = document.getElementById("cardTwo");
    cartTwo.style.display = "none";
  });

// phone handler start

// plusPhone Button

const plusPhone = document.getElementById('plusPhone').addEventListener('click', function(){
  const phonePices = document.getElementById('phonePices').value;
  phonePicesNumber = parseFloat(phonePices);
  
  var addPhonePices = phonePicesNumber + 1;
  document.getElementById('phonePices').value = addPhonePices;

    var phonePrice = document.getElementById('phonePrice').innerText;
    phonePriceNumber = parseFloat(phonePrice);

  var totalPhonePrice = addPhonePices * 1219;

  document.getElementById('phonePrice').innerText = totalPhonePrice;
  subtotalHandaler()


})


// minusPhone Button

const minusPhone = document.getElementById('minusPhone').addEventListener('click', function(){
    const phonePices = document.getElementById('phonePices').value;
    phonePicesNumber = parseFloat(phonePices);
    
   if( 0 < phonePicesNumber){
    var addPhonePices = phonePicesNumber - 1;
    document.getElementById('phonePices').value = addPhonePices;

      var phonePrice = document.getElementById('phonePrice').innerText;
      phonePriceNumber = parseFloat(phonePrice);

    var totalPhonePrice = addPhonePices * 1219;

    document.getElementById('phonePrice').innerText = totalPhonePrice;
   }
   else{
     alert("select one")
   }
   subtotalHandaler()
})

// phone handler end



// case hndlet start

// Case Plus Button

const plusCaseButton = document
  .getElementById("plusCase")
  .addEventListener("click", function () {
    const casePices = document.getElementById("casePices").value;
    casePicesNumber = parseFloat(casePices);
    const addcasePices = casePicesNumber + 1;
    document.getElementById("casePices").value = addcasePices;

    const casePrice = document.getElementById("casePrice").innerText;
    casePriceNumber = parseFloat(casePrice);

    const totalcasePrice = addcasePices * 59;
    document.getElementById("casePrice").innerText = totalcasePrice;
    subtotalHandaler()
  });


// Case Minus Button

const minuscaseButton = document.getElementById("minusCase").addEventListener("click", function () {
    const casePices = document.getElementById("casePices").value;
    casePicesNumber = parseFloat(casePices);
    if (0 < casePicesNumber) {
      const addcasePices = casePicesNumber - 1;

      document.getElementById("casePices").value = addcasePices;

      const casePrice = document.getElementById("casePrice").innerText;
      casePriceNumber = parseFloat(casePrice);

      const totalcasePrice = addcasePices * 59;
      document.getElementById("casePrice").innerText = totalcasePrice;
    } else {
      alert("select one");
    }

    subtotalHandaler()
  });


// case hndlet end

// Grand totalBalance

function subtotalHandaler(){

  // Phone
  const phonePices = document.getElementById('phonePices').value;
    phonePicesNumber = parseFloat(phonePices);

  // case
  const casePices = document.getElementById("casePices").value;
  casePicesNumber = parseFloat(casePices);

// subtotal
   let subtotal = casePicesNumber * 59 + phonePicesNumber *1219
   console.log(subtotal)
   document.getElementById('subtotal').innerText = subtotal;
  

  //  Tax
    let Tax = subtotal * 0.1;
   var totalTax = Math.round(Tax);
   document.getElementById('tax').innerText= totalTax;


// GrandTotal
   var totalBalance = subtotal + totalTax;
   document.getElementById('totalBalance').innerText = totalBalance;
   
}