window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const aboutElement = document.querySelector('#sobremim');
    const experienciaElement = document.querySelector('#experiencia');
    const textexpElement = document.querySelector('.textexp');
    const workElement = document.querySelector('.works');
    const userElement = document.querySelector('.user');
    const userImgElement = document.querySelector('.user img');
    const userParagrafoElement = document.querySelector('.user p');

    if (scrollPosition > 150) {
        aboutElement.style.width = '850px';
        aboutElement.style.height = '370px';
        aboutElement.style.opacity = '100%';

        userElement.style.top = '80%';
        userElement.style.right = '-130px';
        userImgElement.style.width = '200px';
        userImgElement.style.height = '200px';
        userParagrafoElement.style.margin = '10% 5% 15% 5%';
    } else {
        aboutElement.style.width = '300px';
        aboutElement.style.opacity = '0%';

        userElement.style.top = '0%';
        userElement.style.right = '0%';
        userImgElement.style.width = '280px';
        userImgElement.style.height = '280px';
        userParagrafoElement.style.margin = '0 10% 0 10%';
    }

    if (scrollPosition > 380) {
        experienciaElement.style.opacity = '100%';
        textexpElement.style.opacity = '100%';
    } else {
        experienciaElement.style.opacity = '0%';
        textexpElement.style.opacity = '0%';
    }

    if (scrollPosition > 900) {
        workElement.style.opacity = '100%';
    } else {
        workElement.style.opacity = '0%';
    }
});

