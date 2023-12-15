const text = document.querySelector('.typewriter');

const textload = () =>{
    setTimeout(() => {
        text.textContent = 'Developer';
    }, 0);
    setTimeout(() => {
        text.textContent = 'SEO Specialist';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Freelancer';
    }, 8000);
}
