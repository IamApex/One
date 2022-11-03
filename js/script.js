// <!--You did not add '.' to the calculator you did not add your signature etc-->
// <!--You did not add '.' to the calculator you did not add your signature etc-->
// <!--You did not add '.' to the calculator you did not add your signature etc-->
// <!--You did not add '.' to the calculator you did not add your signature etc-->

const $lis = document.querySelectorAll('td')

$lis.forEach((node) => {
node.addEventListener('mousedown', function(event){
const value = node.innerText.trim()
const $screen = document.querySelector('.screen')
     // $screen.innerText = value
 const result = $screen.innerText.trim()


    if(result == '0' || result == 'undefined' || result == 'Infinity'){
        $screen.innerText = ''
        // return true
    }

    if(value == '='){
        let solution = eval(result)
        $screen.innerText = solution
        return true
    }

    if(value.toLowerCase() == "clear"){
        $screen.innerText = ""
        return true
    }

    $screen.append(value)
})
})


// <!--You did not add '.' to the calculator you did not add your signature etc-->
// <!--You did not add '.' to the calculator you did not add your signature etc-->
// <!--You did not add '.' to the calculator you did not add your signature etc-->





// THIS IS THE WRONG WAY TO DO IT

// const plus = document.querySelector('.plus')
//      add = "+"
//      plus.innerHTML = add
//       plus.addEventListener('click', function(event){
//         console.log(add)
//       })

//       const one = document.querySelector('.one')
//      ones = 1
//      one.innerHTML = ones
//       one.addEventListener('click', function(event){
//         console.log(ones)
//       })

//       const two = document.querySelector('.two')
//      twos = 2
//      two.innerHTML = twos
//       two.addEventListener('click', function(event){
//         console.log(twos)
//       })

//       const three = document.querySelector('.three')
//      threes = 3
//      three.innerHTML = threes
//       three.addEventListener('click', function(event){
//         console.log(threes)
//       })

//       const four = document.querySelector('.four')
//      fours = 4
//      four.innerHTML = fours
//       four.addEventListener('click', function(event){
//         console.log(fours)
//       })

//       const five = document.querySelector('.five')
//      fives = 5
//      five.innerHTML = fives
//       five.addEventListener('click', function(event){
//         console.log(fives)
//       })

//       const six = document.querySelector('.six')
//      sixs = 6
//      six.innerHTML = sixs
//       two.addEventListener('click', function(event){
//         console.log(sixs)
//       })

//       const seven = document.querySelector('.seven')
//      sevens = 7
//      seven.innerHTML = 7
//       seven.addEventListener('click', function(event){
//         console.log(sevens)
//       })

//       const eight = document.querySelector('.eight')
//      eights = 8
//      eight.innerHTML = eights
//       eight.addEventListener('click', function(event){
//         console.log(eights)
//       })

//       const nine = document.querySelector('.nine')
//      nines = 9
//      nine.innerHTML = nines
//       nine.addEventListener('click', function(event){
//         console.log(nines)
//       })

//       const divide = document.querySelector('.divide')
//      divides = "/"
//      divide.innerHTML = divides
//       divide.addEventListener('click', function(event){
//         console.log(divides)
//       })

//       const multiply = document.querySelector('.multiply')
//      multiplys = "*"
//      multiply.innerHTML = multiplys
//       multiply.addEventListener('click', function(event){
//         console.log(multiplys)
//       })


//       const minus = document.querySelector('.minus')
//      minuss = '-'
//      minus.innerHTML = minuss
//       minus.addEventListener('click', function(event){
//         console.log(minuss)
//       })

//       const Equal = document.querySelector('.equal')
//      Equals = "="
//      Equal.innerHTML = Equals
//       Equal.addEventListener('click', function(event){
//         console.log(Equals)
//       })

//       const clear = document.querySelector('.clear')
//      clears = "clears"
//      clear.innerHTML = clears
//       clear.addEventListener('click', function(event){
//         console.log(clears)
//       })


//       const backspace = document.querySelector('.backspace')
//      backspaces = "backpsace"
//      backspace.innerHTML = backspaces
//       backspace.addEventListener('click', function(event){
//         console.log(backspaces)
//       })



// const screen = document.querySelector('.screen')
//       screen.innerText = plus
