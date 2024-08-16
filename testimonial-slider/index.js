const testimonial = [
    {
        name: 'Sophia Adams',
        photoUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, adipisci.',
    },
    {
        name: 'Sophia Adams',
        photoUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, adipisci.',
    },
    {
        name: 'Sophia Adams',
        photoUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, adipisci.',
    },
];

const imgE1 = document.querySelector('img');
const textE1 = document.querySelector('.text');
const usernameE1 = document.querySelector('.username');

let idx = 0;
updateTestimonial();
function updateTestimonial() {
    const { name, photoUrl, text } = testimonial;
    testimonial[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++;
    if (idx === testimonial.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 2000);
}
