
const resources = {
     btns:document.querySelectorAll('.controls ul li button'),
     dc:document.querySelector('.dynamic-content')
};


const contents = {
    c1: {
        heading: 'Energy Bulbs',
        bodyText: 'The glass tubes in the bulb are filled with gas, which is mercury vapor. The bulb also contains electronic ballast through which electricity flows when you switch the light on. This, in turn, causes the mercury vapor to give off ultraviolet light, which stimulates the phosphorous coating on the inside the glass tubes to produce visible light.Each low energy light bulb used to replace a traditional bulb saves around 2000 times its own weight in carbon dioxide emissions over the course of its life, which is generally 5-8 years. That’s of incredible benefit to the environment.',
        imageUrl: './img/energybulb.jpg',
        imageAlt: 'energybulb'
    },
    c2: {
        heading: 'Hydro',
        bodyText: ' This renewable resource has been providing cheaper electricity than fossil fuels recently. The global weighted-average levelized cost of hydropower electricity was equal to or below the cost of the cheapest fossil fuel-fired alternative in all but two years between 2010 and 2018. Subsequently, the majority of the hydropower used between 2010 and 2018 has cost less than the cheapest fossil fuel option.',
        imageUrl: './img/hydro.jpg',
        imageAlt: 'hydro'
    },
    c3: {
        heading: 'Solar Panel',
        bodyText: 'Typically works by converting light energy from the sun into electricity. Photovoltaic (PV) energy is created by using flat solar panels that can be affixed to a structures roof or arrayed across open spaces. According to EnergySage, homeowners in Washington will save $17,173 to $23,234, if they go solar over a 20-year period, based on 2019 costs for a 5 kW system.',
        imageUrl: './img/solarpanel.jpg',
        imageAlt: 'alternative text for image 3'
    }
};











// loading initial content (on the page load)
resources.dc.innerHTML = `<h2>${contents.c1.heading}</h2>
                            <figure> 
                            <img src="${contents.c1.imageUrl}" alt="${contents.c1.imageAlt}">
                            </figure>
                            <p>${contents.c1.bodyText}</p>
                        `;


// updatting content based on the button click
let handleClick = e => {

    // fetch the reference to the current button
    let currentButton = e.target;

    // loop through nodelist of items and remove id active
    for (let btn of resources.btns) {
        if (btn.id) {
            btn.removeAttribute('id')
        }
    }
    //add attribute id the clicked item
    currentButton.id ='active';

    // extract the value of data-attribute
    let currentContent = currentButton.dataset.btn;

    // update the content
    resources.dc.innerHTML = `<h2>${contents[currentContent].heading}</h2>
                             <figure> 
                             <img src="${contents[currentContent].imageUrl}" alt="${contents[currentContent].imageAlt}">
                             </figure>
                             <p>${contents[currentContent]. bodyText}</p>
                             `;
};

// register all 3 buttons for click event
for (let btn of resources.btns) {
    btn.addEventListener('click', handleClick);
}




