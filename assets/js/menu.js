const jsonData = [
    {
        "name": "APPETIZERS NON-VEG",
        "description": "A selection of flavorful non-vegetarian starters to whet your appetite.",
        "items": [
            {
                "name": "Chicken 143",
                "description": "Spicy chicken dish, named for its unique preparation.",
                "price": 16.99
            },
            {
                "name": "Chicken 99",
                "description": "A delicious chicken preparation with a distinct flavor profile.",
                "price": 16.99
            },
            {
                "name": "Chicken 65",
                "description": "Deep-fried spicy chicken appetizer, a popular South Indian snack.",
                "price": 16.99
            },
            {
                "name": "Chicken Chili",
                "description": "Wok-tossed chicken with bell peppers and onions in a spicy chili sauce.",
                "price": 17.99
            },
            {
                "name": "Garlic Chicken",
                "description": "Tender chicken pieces infused with aromatic garlic and spices.",
                "price": 18.99
            },
            {
                "name": "Chicken Pakoda",
                "description": "Chicken pieces dipped in a spiced gram flour batter and deep-fried until crispy.",
                "price": 15.99
            },
            {
                "name": "Chicken Lollipop",
                "description": "Frenched chicken drumettes, marinated and deep-fried or baked until juicy.",
                "price": 19.99
            },
            {
                "name": "Apply Chicken Lollipop",
                "description": "A unique variation of chicken lollipop with a special twist.",
                "price": 21.99
            },
            {
                "name": "Chicken Crispy",
                "description": "Crispy fried chicken pieces, seasoned to perfection.",
                "price": 19.99
            },
            {
                "name": "Chicken Pepper Fry",
                "description": "Chicken stir-fried with freshly ground black pepper and aromatic spices.",
                "price": 19.99
            },
            {
                "name": "Shrimp Pepper Fry",
                "description": "Succulent shrimp stir-fried with black pepper and a blend of spices.",
                "price": 22.99
            },
            {
                "name": "Shrimp Chili",
                "description": "Wok-tossed shrimp with bell peppers and onions in a spicy chili sauce.",
                "price": 24.99
            },
            {
                "name": "Shrimp Crispy",
                "description": "Crispy fried shrimp, a delightful seafood appetizer.",
                "price": 24.99
            },
            {
                "name": "Shrimp 65",
                "description": "Spicy deep-fried shrimp, similar to the popular chicken 65.",
                "price": 19.99
            },
            {
                "name": "Shrimp 143",
                "description": "A special shrimp preparation with a unique blend of flavors.",
                "price": 19.99
            },
            {
                "name": "Shrimp 99",
                "description": "A flavorful shrimp appetizer with a distinctive taste.",
                "price": 19.99
            },
            {
                "name": "Goat Pepper Fry",
                "description": "Tender goat meat stir-fried with aromatic spices and a generous amount of black pepper.",
                "price": 24.99
            }
        ]
    },
    {
        "name": "VEG APPETIZER",
        "description": "Delicious vegetarian starters, perfect for sharing or as a light bite.",
        "items": [
            {
                "name": "Mix Veg Chili",
                "description": "Assorted vegetables cooked in a spicy chili sauce.",
                "price": 14.99
            },
            {
                "name": "Mix Veg Crispy",
                "description": "Crispy fried mixed vegetables, seasoned for a delightful crunch.",
                "price": 16.99
            },
            {
                "name": "Mix Veg 143",
                "description": "A unique blend of vegetables prepared with a special spice mix.",
                "price": 16.99
            },
            {
                "name": "Mix Veg 65",
                "description": "Deep-fried mixed vegetables, tossed in a spicy sauce.",
                "price": 14.99
            },
            {
                "name": "Mix 99",
                "description": "A special mixed vegetable appetizer.",
                "price": 14.99
            },
            {
                "name": "Mix Veg Pakoda",
                "description": "Assorted vegetables dipped in a gram flour batter and deep-fried.",
                "price": 11.99
            },
            {
                "name": "Gobi Chilli",
                "description": "Crispy cauliflower florets tossed in a spicy and tangy chili sauce.",
                "price": 14.99
            },
            {
                "name": "Gobi Crispy",
                "description": "Fried cauliflower florets with a crispy coating.",
                "price": 14.99
            },
            {
                "name": "Gobi Pepper Fry",
                "description": "Cauliflower stir-fried with black pepper and spices.",
                "price": 16.99
            },
            {
                "name": "Paneer Chilli",
                "description": "Cubes of Indian cottage cheese stir-fried with bell peppers and onions in a spicy chili sauce.",
                "price": 18.99
            },
            {
                "name": "Paneer Crispy",
                "description": "Crispy fried paneer cubes, seasoned to perfection.",
                "price": 18.99
            },
            {
                "name": "Paneer Pepper Fry",
                "description": "Paneer cubes stir-fried with black pepper and aromatic spices.",
                "price": 19.99
            },
            {
                "name": "Paneer 143",
                "description": "A specially prepared paneer dish with a unique flavor.",
                "price": 18.99
            },
            {
                "name": "Paneer 65",
                "description": "Deep-fried spicy paneer appetizer, a vegetarian favorite.",
                "price": 18.99
            },
            {
                "name": "Paneer 99",
                "description": "A delightful paneer preparation with a distinctive taste.",
                "price": 18.99
            },
            {
                "name": "Baby Corn Chilli",
                "description": "Crispy baby corn tossed in a spicy and tangy chili sauce.",
                "price": 18.99
            },
            {
                "name": "Baby Corn Crispy",
                "description": "Fried baby corn with a crispy texture.",
                "price": 18.99
            },
            {
                "name": "Baby Corn Pepper Fry",
                "description": "Baby corn stir-fried with black pepper and a blend of spices.",
                "price": 19.99
            }
        ]
    },
    {
        "name": "TANDOORI SEAFOOD",
        "description": "Fresh seafood marinated in traditional spices and cooked to perfection in a Tandoor (clay oven).",
        "items": [
            {
                "name": "Tandoori Pomfret",
                "description": "Whole pomfret fish marinated in tandoori spices and cooked in a clay oven.",
                "price": 22.99
            },
            {
                "name": "Tandoori Pomfret Malai",
                "description": "Pomfret fish marinated in a creamy, mild tandoori marinade and cooked in a clay oven.",
                "price": 24.99
            },
            {
                "name": "Tandoori Pomfret Haryali",
                "description": "Pomfret fish marinated in a vibrant green marinade of mint, cilantro, and spices, cooked in a clay oven.",
                "price": 24.99
            },
            {
                "name": "Shrimp Tikka",
                "description": "Marinated shrimp skewered and grilled in the tandoor.",
                "price": 17.99
            },
            {
                "name": "Shrimp Malai Tikka",
                "description": "Shrimp marinated in a rich, creamy, and mildly spiced mixture, then cooked in the tandoor.",
                "price": 19.99
            },
            {
                "name": "Shrimp Haryali Tikka",
                "description": "Shrimp marinated in a refreshing green paste of mint, cilantro, and spices, cooked in the tandoor.",
                "price": 19.99
            }
        ]
    },
    {
        "name": "TANDOORI",
        "description": "Delicacies cooked in a traditional clay oven, offering a smoky flavor and tender texture.",
        "items": [
            {
                "name": "Chicken Tandoori",
                "description": "Classic chicken marinated in yogurt and spices, roasted in a Tandoor.",
                "price": 18.99
            },
            {
                "name": "Chicken Tikka",
                "description": "Boneless chicken pieces marinated in yogurt and spices, grilled in the Tandoor.",
                "price": 15.99
            },
            {
                "name": "Chicken Malai Tikka",
                "description": "Creamy and mildly spiced boneless chicken marinated and cooked in the Tandoor.",
                "price": 18.99
            },
            {
                "name": "Chicken Haryali Tikka",
                "description": "Chicken pieces marinated in a green paste of mint, cilantro, and spices, cooked in the Tandoor.",
                "price": 18.99
            },
            {
                "name": "Paneer Tikka",
                "description": "Cubes of Indian cottage cheese marinated in spices and grilled in the Tandoor.",
                "price": 17.99
            },
            {
                "name": "Paneer Malai Tikka",
                "description": "Paneer marinated in a creamy and mildly spiced mixture, then cooked in the Tandoor.",
                "price": 19.99
            },
            {
                "name": "Paneer Haryali Tikka",
                "description": "Paneer marinated in a green paste of mint, cilantro, and spices, cooked in the Tandoor.",
                "price": 19.99
            }
        ]
    },
    {
        "name": "MAIN COURSE",
        "description": "Hearty and flavorful rice dishes, perfect as a main meal or accompaniment.",
        "items": [
            {
                "name": "Plain Rice",
                "description": "Simple and perfectly cooked plain steamed rice.",
                "price": 7.99
            },
            {
                "name": "Jeera Rice",
                "description": "Basmati rice flavored with cumin seeds.",
                "price": 7.99
            },
            {
                "name": "Lemon Rice",
                "description": "Fragrant rice tossed with a tangy lemon seasoning and spices.",
                "price": 7.99
            },
            {
                "name": "Mix Veg Pulao",
                "description": "Aromatic rice dish cooked with assorted fresh vegetables and mild spices.",
                "price": 7.99
            },
            {
                "name": "Bagara Rice",
                "description": "A flavorful rice dish from Hyderabad, made with whole spices.",
                "price": 7.99
            },
            {
                "name": "Tamarind Rice",
                "description": "Tangy and spicy rice preparation with a distinct tamarind flavor.",
                "price": 7.99
            }
        ]
    },
    {
        "name": "NAAN AND ROTI",
        "description": "Freshly baked Indian breads, perfect for scooping up curries.",
        "items": [
            {
                "name": "Garlic Naan",
                "description": "Soft leavened bread infused with aromatic garlic.",
                "price": 3.99
            },
            {
                "name": "Butter Garlic Naan",
                "description": "Soft leavened bread brushed with butter and infused with garlic.",
                "price": 4.99
            },
            {
                "name": "Chili Garlic Naan",
                "description": "Leavened bread spiced with chili and garlic, for a fiery kick.",
                "price": 4.99
            },
            {
                "name": "Bullet Naan",
                "description": "A spicy naan bread, often topped with green chilies.",
                "price": 5.99
            },
            {
                "name": "Tandoori Roti",
                "description": "Made with whole wheat flour and cooked in a Tandoor.",
                "price": 3.99
            },
            {
                "name": "Tandoori Butter Roti",
                "description": "Whole wheat roti cooked in a Tandoor and brushed with butter.",
                "price": 4.99
            }
        ]
    }
]

function getFirstWord(sentence) {
    // Remove leading and trailing whitespaces
    const trimmedSentence = sentence.trim();

    // Split the sentence into an array of words
    const words = trimmedSentence.split(/\s+/);

    // Return the first word
    return words[0];
}
function renderCategory(category) {
    const sectionContainer = document.createElement("section");

    const heading = document.createElement("h1");
    // heading.className = "cat_heading";
    heading.className = "headline-1 section-title cat_heading";
    heading.textContent = category.name;
    sectionContainer.appendChild(heading);

    const desc = document.createElement("p");
    // desc.className = "cat_desc";
    desc.className = "section-text";
    desc.textContent = category.description;
    sectionContainer.appendChild(desc);

    const section = document.createElement("section");
    section.className = 'menu-section'
    // const sectionNameForFooter = category.sectionId || getFirstWord(category.name)
    const sectionNameForFooter = category.name
    section.id = sectionNameForFooter;

    sectionContainer.appendChild(section);
    const categoryLinks = document.getElementById('category-links');


    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${sectionNameForFooter}">${sectionNameForFooter}</a>`;
    categoryLinks.appendChild(listItem);

    category.items.forEach(item => {
        const thisDiv = document.createElement("div");
        thisDiv.className = "menu-item"

        const name = document.createElement("h3");
        // name.className = "name";
        name.className = "title-3 card-title primary-text";
        name.innerHTML = `${item.name}`;
        thisDiv.appendChild(name);

        if (item.description) {
            const description = document.createElement("p");
            // description.className = "desc";
            description.className = "label-2";
            description.textContent = item.description;
            thisDiv.appendChild(description);
        }

        const price = document.createElement("h3");
        // price.className = "price";
        price.className = "btn-text label-2";
        price.textContent = "$" + item.price.toFixed(2);
        thisDiv.appendChild(price);


        section.appendChild(thisDiv)
        // // section.appendChild(document.createElement("br"));

    });
    const fullMenuDiv = document.getElementById("full_menu")
    fullMenuDiv.appendChild(sectionContainer);
    if (category.note) {
        const note = document.createElement("p");
        note.className = "note";
        note.textContent = category.note;
        fullMenuDiv.appendChild(note);
    }
}
window.addEventListener('load', function () {
    jsonData.forEach(renderCategory);
}); 