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
                "name": "Apple Chicken Lollipop",
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
        "name": "LAMB/GOAT",
        "description": "A flavorful selection of Lamb/Goat dishes simmered in rich gravies and aromatic spices, showcasing traditional recipes from across India.",
        "items": [
            {
                "name": "Lamb/Goat Boti Masala",
                "description": "Lamb/Goat cooked with bell peppers, onions, garlic,\nginger, tomatoes, cream and spices",
                "price": 18.95
            },
            {
                "name": "Lamb/Goat Saag",
                "description": "Lamb/Goat cooked with spinach, onions, garlic, ginger,\ncream and spices",
                "price": 18.95
            },
            {
                "name": "Lamb/Goat Mushroom",
                "description": "Lamb/Goat cooked with fresh mushrooms, tomatoes, onion, garlic,\nginger and spices",
                "price": 18.95
            },
            {
                "name": "Lamb/Goat Coconut Korma",
                "description": "Lamb/Goat cooked with coconut milk, onions, garlic, ginger,\ntomatoes, cashew nuts, golden raisins and spices",
                "price": 18.95
            },
            {
                "name": "Lamb/Goat Curry",
                "description": "Traditional dish cooked with Lamb/Goat, onions, garlic, ginger\n, tomatoes and curry spices",
                "price": 18.95
            },
            {
                "name": "Lamb/Goat Vindaloo",
                "description": "Lamb/Goat cooked with potatoes, onions, tomatoes, garlic\n, ginger, vinegar and spices",
                "price": 18.95
            },
            {
                "name": "Lamb/Goat Biryani",
                "description": "Traditional dish cooked with boneless chicken, potatBasmati rice\ncooked with Lamb/Goat, onions, garlic, ginger, cashew nuts, raisins, and\nspices served with side of raita oes, garlic, ginger, tomato and curry\nspices",
                "price": 19.95
            }]
    },
    {
        "name": "CHICKEN",
        "description": "A variety of classic and contemporary chicken dishes prepared with fragrant herbs, spices, and creamy sauces, offering bold and comforting flavors.",
        "items": [
            {
                "name": "Butter Chicken",
                "description": "Tender chicken pieces simmered in a rich and creamy tomato-based sauce, flavored with butter, spices, and herbs.",
                "price": 16.95
            },
            {
                "name": "Chicken Tikka Masala",
                "description": "Tandoori chicken breast cooked with bell pepper, onions,\ntomatoes, garlic, ginger, cream and spices",
                "price": 16.95
            },
            {
                "name": "Chicken Coconut Korma",
                "description": "Chicken cooked with coconut milk, onion, garlic, tomatoes,\ngolden raisins and spices",
                "price": 16.95
            },
            {
                "name": "Chicken Curry",
                "description": "Traditional dish cooked with boneless chicken, garlic,\nginger, tomato and curry spices",
                "price": 16.95
            },
            {
                "name": "Pineapple Chicken",
                "description": "Breast meat cooked with potatoes, pineapple, tomatoes,\nonions, garlic, ginger, coconut milk and spices.",
                "price": 16.95
            },
            {
                "name": "Chicken Biryani",
                "description": "Basmati rice cooked with chicken, onions, garlic, ginger,\ncashew nuts, raisins and spices served with side of raita",
                "price": 17.95
            },
            {
                "name": "Chicken Makhani (Butter)",
                "description": "Tandoori chicken cooked with onions, garlic, ginger, tomatoes,\ncashews nuts, golden raisins, butter, cream and spices",
                "price": 16.95
            },
            {
                "name": "Chicken Saag",
                "description": "Chicken cooked with spinach, onion, garlic, ginger, cream\nand spices",
                "price": 16.95
            },
            {
                "name": "Chicken Aloo",
                "description": "Traditional dish cooked with boneless chicken, potatoes, garlic,\nginger, tomato and curry spices",
                "price": 16.95
            },
            {
                "name": "Chicken Mushroom",
                "description": "Chicken thigh cooked with mushroom, bell pepper, onion,\ngarlic, ginger, tomatoes and spices",
                "price": 16.95
            },
            {
                "name": "Mango Chicken(New)",
                "description": "Breast meat cooked with mango, tomatoes,onions,garlic,\nginger,coconut milk and spices.",
                "price": 16.95
            }
        ]
    },
    {
        "name": "VEGETARIAN & VEGAN (V)",
        "description": "A vibrant assortment of vegetarian and vegan dishes prepared with fresh vegetables, legumes, paneer, and aromatic spices. Comforting, flavorful, and satisfying for all diets.",
        "items": [
            {
                "name": "Vegetable Masala",
                "description": "Mixed vegetables cooked with onions, tomatoes, garlic, ginger, cream and spices",
                "price": 15.95
            },
            {
                "name": "Mattar Paneer",
                "description": "Green peas and homemade cheese cubes cooked with onions, tomatoes, garlic, ginger and spices.",
                "price": 16.95
            },
            {
                "name": "Saag Aloo",
                "description": "Spinach cooked with potatoes, onions, garlic, ginger, tomatoes, cream and spices",
                "price": 15.95
            },
            {
                "name": "Baygan Bharta",
                "description": "Roasted eggplant cooked with green peas, onions, garlic, ginger, tomatoes, spices and a touch of cream",
                "price": 15.95
            },
            {
                "name": "Mixed Vegetable Curry (V)",
                "description": "Traditional dish of mixed vegetables cooked with onions, garlic, ginger, tomatoes and spices",
                "price": 15.95
            },
            {
                "name": "Mattar Mushroom (V)",
                "description": "Fresh mushrooms cooked with green peas, onions, garlic, ginger, tomatoes and spices",
                "price": 15.95
            },
            {
                "name": "Aloo Gobi (V)",
                "description": "Potatoes and cauliflower cooked with onions, tomatoes, garlic, ginger and spices",
                "price": 14.95
            },
            {
                "name": "Daal Maharani (V)",
                "description": "Urad daal (black lentils) cooked with onions, garlic, ginger, tomatoes and spices to a thick sauce",
                "price": 14.95
            },
            {
                "name": "Coconut Tofu (V)",
                "description": "Tofu cooked with bell pepper, onions, garlic, ginger, and spices in a coconut milk sauce and a touch of cream",
                "price": 14.95
            },
            {
                "name": "Vegetable Biryani",
                "description": "Basmati rice cooked with vegetables, onions, garlic, ginger, cashew nuts, golden raisins and spices. Served with side of raita.",
                "price": 16.95
            },
            {
                "name": "Paneer Masala",
                "description": "Homemade cheese cooked with bell pepper, onions, tomatoes, garlic, ginger, cream and spices",
                "price": 16.95
            },
            {
                "name": "Saag Paneer",
                "description": "Spinach cooked with homemade cheese, onions, garlic, ginger, tomatoes, cream and spices",
                "price": 16.95
            },
            {
                "name": "Malai Kofta",
                "description": "Vegetable balls cooked with onions, tomatoes, cashew nuts, golden raisins, cream and spices",
                "price": 16.95
            },
            {
                "name": "Mushroom Makhani",
                "description": "Royal dish made with fresh mushroom, onion, garlic, ginger, tomatoes, butter, cream and spices",
                "price": 15.95
            },
            {
                "name": "Vegetable Coconut Kurma (V)",
                "description": "Mixed vegetables cooked with onions, tomatoes, cashew nuts, golden raisins, coconut milk and spices",
                "price": 15.95
            },
            {
                "name": "Daman Bhindi (V)",
                "description": "Okra cooked with onions, garlic, ginger, tomatoes, coconut milk and spices",
                "price": 15.95
            },
            {
                "name": "Aloo Mattar (V)",
                "description": "Potatoes and green peas cooked with onions, tomatoes, garlic, ginger and spices",
                "price": 14.95
            },
            {
                "name": "Channa Masala (V)",
                "description": "Garbanzo beans (chickpeas) cooked with onions, garlic, ginger, tomatoes and spices",
                "price": 14.95
            },
            {
                "name": "Yellow Daal (V)",
                "description": "Toor daal (yellow lentils) cooked with onions, garlic, ginger, tomatoes and spices",
                "price": 14.95
            }
        ]
    },
    {
        "name": "SEAFOOD",
        "description": "A flavorful selection of coastal-inspired seafood dishes featuring shrimp and fish, expertly cooked with rich spices, herbs, and creamy sauces for a truly satisfying experience.",
        "items": [
            {
                "name": "Shrimp Masala",
                "description": "Grilled shrimp cooked with onions, bell peppers, tomatoes, garlic, ginger, cream and spice",
                "price": 19.95
            },
            {
                "name": "Assam Pineapple Shrimp",
                "description": "Shrimp cooked with pineapple, onions, garlic, ginger, tomatoes, coconut cream and spices",
                "price": 19.95
            },
            {
                "name": "Fish Curry",
                "description": "Halibut cooked with curry spices, onions, garlic, ginger, coconut milk and tamarind",
                "price": 24.95
            },
            {
                "name": "Shrimp Coconut Kurma",
                "description": "Shrimp cooked with coconut milk, onions, garlic, ginger, tomatoes, cashew nuts, golden raisins and spices",
                "price": 19.95
            },
            {
                "name": "Shrimp Curry",
                "description": "Traditional dish cooked with shrimp, onions, garlic, ginger, tomatoes and curry spices",
                "price": 19.95
            }
        ]
    },
    {
        "name": "RICE",
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
        "name": "DESSERTS",
        "description": "Traditional Indian sweets and treats, offering a perfect balance of rich flavors, creamy textures, and fragrant spices to complete your meal.",
        "items": [
            {
                "name": "Mango Ice Cream",
                "description": "Favorite homemade Indian ice cream made with Indian mango pulp, vanilla and cream",
                "price": 5.25
            },
            {
                "name": "Gulab Jamun (G)",
                "description": "A light pastry made from dry milk and flour, soaked in rose-flavored syrup",
                "price": 4.95
            },
            {
                "name": "Kheer",
                "description": "Cardamom-flavored rice pudding garnished with cashew nuts and golden raisins",
                "price": 4.95
            },
            {
                "name": "Kulfi",
                "description": "Homemade Indian ice cream with pistachios, cashew nuts, cardamom seeds and cream",
                "price": 5.25
            }
        ]
    },
    {
        "name": "BEVERAGES",
        "description": "A refreshing selection of traditional Indian drinks, teas, soft beverages, and more to complement your meal.",
        "items": [
            {
                "name": "Mango Lassi",
                "description": "Refreshing yogurt drink blended with mangoes and homemade yogurt",
                "price": 4.95
            },
            {
                "name": "Rose Lassi",
                "description": "Refreshing yogurt drink blended with rose essence and homemade yogurt",
                "price": 4.95
            },
            {
                "name": "Strawberry Lassi",
                "description": "Refreshing yogurt drink blended with strawberries and homemade yogurt",
                "price": 4.95
            },
            {
                "name": "Indian Tea",
                "description": "Traditional Indian-style tea with milk and spices",
                "price": 3.50
            },
            {
                "name": "Bottled Water",
                "description": "Bottled mineral water",
                "price": 1.99
            },
            {
                "name": "Soft Drinks",
                "description": "Coke, Diet Coke, Coke Zero, Sprite, Pepsi, Mountain Dew, Dr. Pepper",
                "price": 2.50
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