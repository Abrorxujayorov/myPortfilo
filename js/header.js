let baza = ["I'm Developer","I'm Programmer","I'm Bot creator"]
let work = document.querySelector('.work-info')
function main(){
    setTimeout(() => {
        work.textContent = baza
    }, 2000);
}
main()

work.textContent