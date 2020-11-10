const books = [
    //Book1
    {
        name: "Between The World And Me",
        author: "by Ta-Nehisi Coates",
        price: "£7.99",
        description: "A 2015 winner of the National Book Award for non-fiction, the renowned journalist and writer pens a profound letter to his son about what it means to be Black in America in the 21st century — a place in which you struggle to overcome the historical trauma of your people while trying to find your own purpose in the world.",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549482990-51ndtpPOGTL.jpg?crop=1xw:1xh;center,top&resize=768:*"
    },
    //Book2
    {
        name: "Queenie",
        author: "by Candice Carty-Williams",
        price: "£6.99",
        description: "In one of 2019's most talked about novels, a 25-year-old journalist in London attempts to recover from a terrible break up with her long-time boyfriend. But while on the path to finding happiness, road blocks, questionable decisions, and more-than-a-few problematic men get in her way.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51LE+c73D5L._SX320_BO1,204,203,200_.jpg"
    }, 
    //Book3
    {
        name: "We Should All Be Feminists",
        author: "by Chimamanda Ngozi Adiche",
        price: "£4.49",
        description: "Adapted from her TEDx Talk of the same name, Adiche uses personal experiences and understanding of sexual politics to define what feminism means in the 21st century.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41iXPOubV8L._SX331_BO1,204,203,200_.jpg"
    },
    //Book4
    {
        name: "How We Fight for Our Lives",
        author: "by Saeed Jones",
        price: "£14.53",
        description: "In one of 2019's most talked about novels, a 25-year-old journalist in London attempts to recover from a terrible break up with her long-time boyfriend. But while on the path to finding happiness, road blocks, questionable decisions, and more-than-a-few problematic men get in her way.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51h0FjPCwxL._SX323_BO1,204,203,200_.jpg"
    },
    //Book5
    {
        name: "Black Leopard, Red Wolf",
        author: "by Marlon James",
        price: "£7.99",
        description: "Already being called one of the best books of the year, James' epic fantasy honors African mythology and history. In it, a hunter named Tracker must find a mysterious missing boy with the help of a rag-tag group of mercenaries. The first of a planned trilogy, some are calling it the 'African Game of Thrones.'",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wNRLYhK8L._SX331_BO1,204,203,200_.jpg"
    },
    //Book6
    {
        name: "I Know Why the Caged Bird Sings",
        author: "by Maya Aneglou",
        price: "£5.99",
        description: "Written by a legendary writer, civil rights activist, I Know Why the Caged Bird Sings is an poetic memoir that captures Angelou's childhood struggles and the freedoms of her adulthood, which allowed her to find strength amidst despair.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51ZDaFuARZL._SX316_BO1,204,203,200_.jpg"
    },
    //Book7
    {
        name: "Gingerbread",
        author: "by Helen Oyeyemi",
        price: "£6.99",
        description: "In a re-imagining of the classic German fairy tale Hansel and Gretel, a woman named Harriet narrates her origin story to her daughter Perdita. She makes a mysterious gingerbread that's incredibly popular in Harriet's magical hometown of Druhástrana. And it's especially loved by her childhood best friend: Gretel.",
        image: "https://m.media-amazon.com/images/I/41ZV7pnGaNL.jpg"
    },
    //Book8
    {
        name: "The New Jim Crow",
        author: "by Michelle Alexander",
        price: "£8.19",
        description: "In this New York Times bestseller, Alexander explains how the mass incarceration of Black people in the United States is today's version of the Jim Crow era.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41DXUSS1T7L._SX324_BO1,204,203,200_.jpg"
    },
    //Book9
    {
        name: "Homegoing",
        author: "by Yaa Gyasi",
        price: "£6.99",
        description: "Half-sisters Effia and Esi are born in two different villages in 18th century Ghana. One marries a British slaver, while another is sold into slavery and shipped to America. Gyasi's prose follows the generations and descendants that follow.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51KPVASkM1L._SX332_BO1,204,203,200_.jpg"
    },
    //Book10
    {
        name: "It's Not All Downhill from Here",
        author: "by Terry McMillan",
        price: "£16.39",
        description: "Waiting to Exhale's Terry McMillan tells the story of Loretha, a 68-year-old woman whose life is full of dear friends, lasting love, and a thriving business. But when an unexpected loss causes her to question her optimistic outlook on life, Loretha must gather all her strength to push through heartbreak.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51KB-S8cnTL._SX327_BO1,204,203,200_.jpg"
    },
    //Book11
    {
        name: "More Than Enough",
        author: "by Elaine Welteroth",
        price: "£11.54",
        description: "The former Teen Vogue editor-in-chief opens up in this revealing memoir about growing up in California as the ambitious child of an 'unlikely interracial marriage', only to become a boundary-breaking journalist—as she shared the lessons learned along the way.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41pPN8G0x5L._SX325_BO1,204,203,200_.jpg"
    },
    //Book12
    {
        name: "The Hate U Give",
        author: "by Angie Thomas",
        price: "£7.44",
        description: "Adapted into a 2018 film, this novel that made the National Book Award Longlist, tells the story of a teen named Starr Carter, who's the sole-witness to the fatal police shooting of her her childhood best friend. As the tragedy hits national news, her community becomes divided and Starr must decide whether to remain private or to become the public face of a movement.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41hnte7TWXL._SX314_BO1,204,203,200_.jpg"
    },
   
    //Book13
    {
        name: "Beloved",
        author: "by Toni Morrison",
        price: "£7.90",
        description: "This Pulitzer Prize-winning novel is arguably Morrison's most well-known. It tells the story of Sethe, a former slave who escaped to Ohio in the 1870s—but despite her freedom, finds herself haunted by the trauma of her past..",
        image: "https://images-na.ssl-images-amazon.com/images/I/41Y0cCaqsXL._SX322_BO1,204,203,200_.jpg"
    },

    //Book14
    {
        name: "The Color Purple",
        author: "by Alice Walker",
        price: "£5.99",
        description: "Adapted into a Steven Spielberg directed film, The Color Purple tells the tale of Celie, a young woman growing up in poverty in segregated Georgia. Despite suffering hardship, Celie finds her way back to the ones she loves in a time-tested story.",
        image: "https://images-na.ssl-images-amazon.com/images/I/61N+L0riZXL._SY344_BO1,204,203,200_.jpg" 
    },

    //Book15
    {
        name: "Sing, Unburied, Sing",
        author: "by Jesmyn Ward",
        price: "£6.99",
        description: "Another winner of the National Book Award for Fiction, Ward's Sing, Unburied, Sing chronicles the tense dynamics of a family in a fictional rural town in Mississippi. It follows a biracial 13-year-old boy named Jojo—who struggles to understand manhood—plus his drug-addicted mother Leonie and his white father, who is newly released from prison.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41S4kIwh9IL._SX325_BO1,204,203,200_.jpg" 
    },

    //Book16
    {
        name: "The Underground Railroad",
        author: "by Colson Whitehead",
        price: "£7.00",
        description: "Winner of both the Pulitzer Prize and National Book Award for fiction, Whitehead's novel follows escaped slaves, Cora and Caesar, and their harrowing journey as they navigate the underground railroad. But as they travel from state-to-state, they're trailed by a relentless slave master who will stop at nothing to catch them.",
        image: "https://images-na.ssl-images-amazon.com/images/I/61oBuM--FBL._SX323_BO1,204,203,200_.jpg"
    },

    //Book17
    {
        name: "Becoming",
        author: "by Michelle Obama",
        price: "£7.44",
        description: "Adapted into a 2018 film, this novel that made the National Book Award Longlist, tells the story of a teen named Starr Carter, who's the sole-witness to the fatal police shooting of her her childhood best friend. As the tragedy hits national news, her community becomes divided and Starr must decide whether to remain private or to become the public face of a movement.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41WLtXchdNL._SX327_BO1,204,203,200_.jpg"
    },

    //Book18
    {
        name: "Red at the Bone",
        author: "by Jacqueline Woodson",
        price: "£7.91",
        description: "Officially the best-selling book of 2018, the former first lady tells all in a 'vulnerable' memoir, in which she opens up about her marriage, life before and after the White House, and what she feels about our current president.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51IFAGw-2iL._SX311_BO1,204,203,200_.jpg"
    },

    //Book19
    {
        name: "Slay in your lane",
        author: "by Yomi Adegoke and Elizabeth Uviebinené",
        price: "£8.76",
        description: "Serving as guide for Black-British women, Slay in Your Lane uncovers some of the common challenges that Black women face in business, money matters and dating, while offering savvy solutions on how to banish stigmas and find success.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41mKvLKZBHL._SX324_BO1,204,203,200_.jpg"
    },

    //Book20
    {
        name: "What a Time to be Alone",
        author: "by Chidera EggerueJacqueline Woodson",
        price: "£10.19",
        description: "Published in 2018, The Slumflower’s What A Time To Be Alone is a self-help book that encourages readers to embrace who they are unapologetically and quest on a journey of self-love. Illustrated with some of her own original artwork, Eggerue adopts Igbo proverbs from her Nigerian Mother to decipher her top tips on how to grow wiser and heal from trauma and toxic relationships.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51V6w9jTSbL._SX318_BO1,204,203,200_.jpg"
    },

]