// _______________________________________________________________________________________________
// ---------------------- * Home page js *------------------------------------------------------

// Function to fetch the first 9 items from author.html and populate .home-authors
   document.addEventListener("DOMContentLoaded", function() {
    const items = [
{ title: "Alia Almoayed", image: "/images/Alia Almoayed FB Pic.png" },
{ title: "Antoine D.Moss", image: "/images/antoine.png" },
{ title: "Alex Rodriguez", image: "/images/Alex Rodriguez.png" },
{ title: "Brandi Parsons", image: "/images/Brandi Parsons.png" },
{ title: "Brant Vickers", image: "/images/Brant Vickers.png" },            
{ title: "Dr.Carolyn Scott", image: "/images/Carolyn Scott FB Picture.png" },
{ title: "Kathryn Cervera", image: "/images/Cervera LinkedIn Image.png" },
{ title: "Courtney Pahlke", image: "/images/Courtney Pahlke Amazon Author Photo.png" },
{ title: "Curse Queen", image: "/images/Curse Queen Author Picture.png" },
       
    ];

    const itemsPerPage = 9;
    const itemContainer = document.querySelector(".home-authors");

    function showFirstNineItems() {
        itemContainer.innerHTML = "";
        for (let i = 0; i < itemsPerPage; i++) {
            const item = items[i];
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            const authorPageUrl = `author_info.html?title=${item.title}&image=${item.image}`;
            itemDiv.innerHTML = `
                <a  class="" href="${authorPageUrl}" >
                    <div class="author">
                        <div class="author-img-div ">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="item-content author-name">
                            <p class="title text-dark fw-bold mt-2">${item.title}</p>
                        </div>
                        <div class="mt-2 text-dark p-0 m-0 get-to-know">Get To Know
                            <i class="fa fa-arrow-circle-right "></i>
                        </div>
                    </div>
                </a>
            `;
            itemContainer.appendChild(itemDiv);
        }
    }

    showFirstNineItems();
});

// Function to pause and resume the slider animation
let animationPaused = false;
const slideTrack = document.getElementById('slideTrack');

function pauseSlider() {
    slideTrack.style.animationPlayState = 'paused';
    animationPaused = true;
}

function resumeSlider() {
    if (animationPaused) {
        slideTrack.style.animationPlayState = 'running';
        animationPaused = false;
    }
}
// _______________________________________________________________________________________________
// ---------------------- * All authors *------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const items = [
    { title: "Alia Almoayed", image: "/images/Alia Almoayed FB Pic.png" },
    { title: "Antoine D.Moss", image: "/images/antoine.png" },
    { title: "Alex Rodriguez", image: "/images/Alex Rodriguez.png" },
    { title: "Brandi Parsons", image: "/images/Brandi Parsons.png" },
    { title: "Brant Vickers", image: "/images/Brant Vickers.png" },  
    { title: "Dr.Carolyn Scott", image: "/images/Carolyn Scott FB Picture.png" },
    { title: "Kathryn Cervera", image: "/images/Cervera LinkedIn Image.png" },
    { title: "Courtney Pahlke", image: "/images/Courtney Pahlke Amazon Author Photo.png" },
    { title: "Curse Queen", image: "/images/Curse Queen Author Picture.png" },
    { title: "Deanna King", image: "/images/Deanna King FB Photo.png" },
    { title: "Devaughn Lily", image: "/images/Devaughn Lily FB Pic.png" },
    { title: "Gracelyn Keys", image: "/images/Gracelyn Keys.png" },
    { title: "Jason Ranieri", image: "/images/Jason Ranieri FB Image.png" },
    { title: "Jay Payleitner", image: "/images/jay-payleitner-isolated.png" },
    { title: "John Morgan Mullen", image: "/images/John Morgan Mullen.png" },
    { title: "Josef Tsau", image: "/images/Josef Tsau Amazon Picture.png"},
    { title: "Karen J Roberts", image: "/images/Karen J Roberts Author Picture.png"},
    { title: "Kathy Bornino", image: "/images/Kathy Bornino FB Image.png"},
    { title: "Leonard H. Roberts", image: "/images/Len Roberts FB Image.png"},
    { title: "Louis Garbis", image: "/images/Garbis Author Picture Bright.png" },
    { title: "Lynda Vialet", image: "/images/Lynda Vialet FB Picture.png"},
    { title: "Marc Casciani", image: "/images/Marc Casciani Publishizer Image.jpg"},
    { title: "Dr Meena Chintapalli", image: "/images/Meena Chintapalli LinkedIn Photo.png"},
    { title: "Emerich Roth", image: "/images/Emerich Roth.png"},
    { title: "J.Price", image: "/images/female author.png"},
    { title: "Sally Veillette", image: "/images/Sally Veillette Amazon Picture.png"},  
    { title: "Brandon Iwan", image: "/images/Brandon Iwan.png" },
    { title: "Allen Lowe", image: "/images/Male Author.png" },
    { title: "Bob Marks", image: "/images/Male Author.png" },
    { title: "Dr. Burliss Parker", image: "/images/Male Author.png" },
    { title: "C.A. Reagan", image: "/images/Male Author.png" },
    { title: "Catherine Matsalla", image: "/images/Catherine Matsalla.png" },
    { title: "Charring Cross", image: "/images/Male Author.png" },
    { title: "Daniel Rodriquez", image: "/images/Male Author.png" },
    { title: "Deb Huntley", image: "/images/Deb Huntley.png" },
    { title: "Debbie Stevens", image: "/images/Debbie Stevens.png" },
    { title: "Don Segal", image: "/images/Male Author.png" },
    { title: "Jack McNaughton", image: "/images/Male Author.png" },
    { title: "Jake Townsend", image: "/images/Male Author.png" },
    { title: "Jason Dankert", image: "/images/Male Author.png" },
    { title: "Joseph J Allen", image: "/images/Joseph J Allen.png" },
    { title: "Judy Young", image: "/images/Judy Young.png" },
    { title: "Kathy Stacey", image: "/images/Kathy Stacey.png" },
    { title: "Larry Ventresca", image: "/images/Larry Ventresca.png" },
    { title: "M.K. Hoffman", image: "/images/Male Author.png" },
    { title: "Maka Sepashvali", image: "/images/Maka Sepashvali.png" },
    { title: "Marcus Armantrout", image: "/images/Male Author.png" },
    { title: "Margaret Podmore Emery", image: "/images/Margaret Podmore Emery.png" },
    { title: "Mark D. Estes", image: "/images/Male Author.png" },
    { title: "Mark Reasoner", image: "/images/Mark Reasoner.png" },
    { title: "Michelle Murray", image: "/images/Michelle Murray.png" },
    { title: "Mirela Kanini", image: "/images/Mirela Kanini.png" },
    { title: "Nadia Mau Bernardy", image: "/images/Nadia Mau Bernardy.png" },
    { title: "Rose Hale", image: "/images/Rose Hale.png" },
    { title: "Stephen Juracka", image: "/images/Stephen Juracka.png" },
    { title: "Sweet Sue Kouchis", image: "/images/Sweet Sue Kouchis.png" },
    { title: "Teresa Spangler", image: "/images/Teresa Spangler.png" },
    { title: "William Mierzejewski", image: "/images/William Mierzejewski.png" },
    
            
  ]
  const itemsPerPage = 9;
    let currentPage = 1;
    let currentItems = items; // Initialize with all items
    const itemContainer = document.getElementById("itemContainer");
    const pagination = document.getElementById("pagination");
    const noItemsMessage = document.getElementById("noItemsMessage");
    const searchInput = document.getElementById("searchInput");
    const maxVisiblePages = 3; // Maximum number of visible pagination buttons
  
    function showItems(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsToShow = currentItems.slice(startIndex, endIndex);
  
      itemContainer.innerHTML = "";
      itemsToShow.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        const authorPageUrl = `author_info.html?title=${item.title}&image=${item.image}`;
        itemDiv.innerHTML = `
          <a class="" href="${authorPageUrl}">
            <div class="author">
              <div class="author-img-div"> <img src="${item.image}" alt="${item.title}"></div>
              <div class="item-content">
                <p class="title text-dark fw-bold mt-2 author-name">${item.title}</p>
              </div>
              <div class="mt-2 text-dark p-0 m-0 get-to-know ">Get To Know
                <i class="fa fa-arrow-circle-right"></i>
              </div>
            </div>
          </a>
        `;
        itemContainer.appendChild(itemDiv);
      });
  
      if (currentItems.length === 0) {
        noItemsMessage.style.display = "block";
      } else {
        noItemsMessage.style.display = "none";
      }
    }
  
  
    function updatePaginationButtons() {
    pagination.innerHTML = ""; // Clear existing pagination buttons
    const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  
    // Add Previous button
    const prevButton = document.createElement("button");
    prevButton.textContent = "<";
    prevButton.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        showItems(currentPage);
        updatePaginationButtons();
      }
    });
    pagination.appendChild(prevButton);
  
    // Add first page button if necessary
    if (currentPage > 2) {
      const firstPageButton = document.createElement("button");
      firstPageButton.textContent = "1";
      firstPageButton.addEventListener("click", function () {
        currentPage = 1;
        showItems(currentPage);
        updatePaginationButtons();
      });
      pagination.appendChild(firstPageButton);
    }
  
    // Add ellipsis if necessary
    if (currentPage > Math.ceil(maxVisiblePages / 2) + 1) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      pagination.appendChild(ellipsis);
    }
  
    // Calculate start and end page indices
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
    // Adjust startPage if there are not enough pages to show
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
  
    // Add page buttons
    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", function () {
        currentPage = i;
        showItems(currentPage);
        updatePaginationButtons();
      });
      pagination.appendChild(button);
  
      // Add active class to current page button
      if (i === currentPage) {
        button.classList.add("active");
      }
    }
  
    // Add ellipsis if necessary
    if (currentPage < totalPages - Math.floor(maxVisiblePages / 2)) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      pagination.appendChild(ellipsis);
    }
  
    // Add last page button if the current page is not within the last two pages
    if (currentPage < totalPages - 1 && totalPages > 1) {
      const lastPageButton = document.createElement("button");
      lastPageButton.textContent = totalPages;
      lastPageButton.addEventListener("click", function () {
        currentPage = totalPages;
        showItems(currentPage);
        updatePaginationButtons();
      });
      pagination.appendChild(lastPageButton);
    }
  
    // Add Next button
    const nextButton = document.createElement("button");
    nextButton.textContent = ">";
    nextButton.addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        showItems(currentPage);
        updatePaginationButtons();
      }
    });
    pagination.appendChild(nextButton);
  }
  
    function handleSearch() {
      const searchQuery = searchInput.value.trim().toLowerCase();
      const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery)
      );
      currentItems = filteredItems;
      showItems(1); // Reset pagination to first page
      updatePaginationButtons(); // Update pagination buttons based on filtered items
      if (filteredItems.length === 0) {
        noItemsMessage.style.display = "block";
      } else {
        noItemsMessage.style.display = "none";
      }
    }
  
    showItems(currentPage);
    updatePaginationButtons();
  
    searchInput.addEventListener("input", function() {
      handleSearch();
    });
  });
  

  // _______________________________________________________________________________________________
// ---------------------- * All authors informations *------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    const image = urlParams.get("image");

    const descriptions = {
      "Alia Almoayed":
        "Alia Almoayed is a Nutritional Therapist running a busy nutrition consultancy in the Kingdom of Bahrain, offering nutrition advice to the Middle East community and beyond.  She writes health articles for various publications, runs TV and radio programmes on health and nutrition, holds lectures and seminars on the subject, and heads a number of weight loss projects.  Alia is the author of I Want Healthy Kids, a book on how to raise healthy children, The Dream Body Eating Plan, a weight loss guide, and I Want a Healthy Pregnancy, a book on how to enjoy natural pregnancy and childbirth; she is also co-author of 101 Ways To Improve Your Health.<br><p class='mt-2'>Alia hosts DARE TO BE HEALTHY, an internet health show on www.DareToBeHealthy.com and runs an active blog on www.AliaAlmoayedBlog.com.  For more information, to book appointments, to get regular email health tips, or to request Alia’s special FREE Report entitled: 5 Secrets Your Doctor Won’t Tell You About Your Health, visit <a  href='http://www.AliaAlmoayed.com'class=''> http://www.AliaAlmoayed.com </a> .</p>",
      "Antoine D.Moss":
        "Since 2006 Antoine has been employed by NASA Glenn Research Center where he once helped design an innovative leadership development program for NASA's employees. Antoine initially stared working with NASA as an intern, but subsequently landed a full-time job with NASA as a result of his stellar high performance during his internship.<br><p class='mt-2'>Over the years Antoine has been privileged to develop a powerful network of highly successful professionals. His network of high performers is comprised of astronauts, millionaires, U.S. Congressional officials, FBI agents, famous celebrities, past NBA & NFL players, doctors, authors, senior executives, and national business moguls. From these transformational encounters Antoine learned and intensely continues to study the attributes of high performance, and he began to put his knowledge into practice to achieve extraordinary success. As a result, Antoine created his high performance C.E.O. Maximum Achievement System that empowers young professionals to accelerate personal achievement, career advancement, and leadership capabilities.</p>",
      "Alex Rodriguez":
        "Born and raised in the Chicagoland area, Alex Rodriguez grew up inspired by action-packed stories of science fiction and the adventures of superheroes. She graduated with a Bachelor's degree in Psychology.<br><p class='mt-2'>Now a Wisconsin resident, Alex enjoys spending time with family and friends, walking her dog Titan, attending writing classes, and discovering new books/TV shows to fall in love with. </p>",
      "Brandi Parsons":
        "Brandi Parsons has been interested in social justice issues for more than two decades. Kidnapped Asylum is her debut book which she hopes will shed some light on the complicated issue of immigration in the United States. She currently lives in Cedar Rapids, Iowa with her family",
      "Brant Vickers":
        "Brant Vickers has had several careers in his life. He started as a caddy and then delivered flowers before going into the military. He later found his true profession and vocation working with students with special needs. His favorite thing now is writing stories for young adults.",
      "Dr.Carolyn Scott":
        "Dr. Carolyn Scott is a retired educator of 35 years. She spent her entire 35 years as a teacher and administrator in both traditional and non-traditional school settings, working with students identified as having learning difficulties. The first twenty years were spent with the Hillsborough County School System. Her last 15 years was spent at a charter school that was designed to help children who had learning difficulties in grades Kindergarten through 12th grade. The experience of working with these wonderful, creative and imaginative students is what instilled in her the passion to continue to find ways to help these students.<p class='mt-2'>When Pahlke is not brainstorming the next plot for the Life Force Preserve series, she is growing her father’s empire with her brother Garrett at Top Coverage, taking pictures of food or taking a crack at a new recipe.</p><p class=''>Courtney also writes for The SHOP national automotive magazine.</p>",
      "Kathryn Cervera":
        "Kathryn Cervera is the author of the young adult novel Who Is It?, now available at Amazon and at Barnes & Noble bookstores. She enjoys reading, cooking, and spending time with her husband. You'll know she's happy when she's singing and dancing.",
      "Courtney Pahlke":
        "Courtney Pahlke graduated from the University of Iowa with a degree in psychology and a secondary in creative writing. She worked at the Crisis Center in Iowa city leading to graduation day, where she went back home to Illinois with a plan. Courtney hoped to gain her masters degree in forensic psychology at a school in Chicago, while working for her dad, to pay for school. After the first year working for her dad’s company, she decided not to continue on with school and grow the family business instead.",

      "Curse Queen":
        "<p class=''>The Curse Queen was born in Ohio to a family with Witchcraft in their history. Her father was a long time practicing Wiccan, before moving on to darker practices. As of the writing of this book, he is a non-practicing agnostic. Her mother carries folk practices from a long line of female ancestors, both Irish and Native American.</p>" +
        "<p class=''>Curse Queen has learned since childhood from both sides of her family, including her introduction to Vampires and Blood Magic by her paternal grandmother at a very young age. </p>" +
        "<p class=''>She has created her own path, from the mix of the many things her family has taught her. She claims no titles and has no initiations into any coven or tradition, though she has aided in the forming of several covens that she subsequently left once they no longer served her best interests.</p>" +
        "<p class=''>Curse Queen is currently considering accepting students in the near future.</p>" +
        "<p class=''>You can send questions, comments, feedback, fan mail, hate mail, and more to: </p>",
      "Deanna King":
        "<p class=''>Gracie's Stories is Deanna's first children's book, and her plans are to write a series of Gracie Stories touching on several issues children face as they grow, thru the eyes of Gracie. Deanna lives in Texas with her husband Travis, her biggest fan, and two completely spoiled little dogs.</p>",
      "Devaughn Lily":
        "<p class='p-lg-0 m-lg-0 '>Author DeVaughn M. Lilly is a thirty two year old Cleveland native and graduate of Warrensville Heights High School. DeVaughn is a very ambitious exciting young writer and publisher. His goal is to spread the importance of literacy in our communities and what better way to do this than to write inspiring and thrilling new literature. DeVaughn's debut novel; 'The Magnificent Life of Gravvy Brown' was released in '2012' under his own newly established publishing company (Young Revolutionary Publishing Inc.), (eBooks2go).After embarking on his first national book signing tow in the summer of '2012 DeVaughn released his second full length novel, 'Memoirs of the Homosexual President (Told by the First Lady in the summer of '2013'. Then in the fall of '2013 DeVaughn went out on his second national tour.</p>" +
        "<p class='p-lg-0 m-lg-0 '>DeVaughn who calls himself 'The Voice of a Generation’ has developed his (5 Easy Steps to Creative Writing) which is billed as 'The Return of the Writer'. DeVaughn is currently working on his third full length novel, 'The Conspiracy to Kill Michol A'ngelo' and planning another tour for '2014.</p>" +
        "<p class='p-lg-0 m-lg-0 '> He and business partner and manager Phillip Dickson opened up their first restaurant together in January of 2014, it is named (R & D's World Famous Corned Beef) which is located at 534 East 200 street in Euclid, Ohio 44119.DeVayghn Lilly has carved out his own brand of historical fiction, suspense drama, and what he likes to call true life fiction through his love and passion for storytelling. His ultimate dream and goal in this industry is to make reading 'cool' again by bringing reading back to the forefront of entertainment. DeVaughn will do book signings, public inspirational speeches, forums and book discussions. </p>",

      "Gracelyn Keys":
        "<p class='p-lg-0 m-lg-0 '>Gracelyn Keys is a children’s picture book author and a mental wellness advocate. She creates educational and entertaining children's picture books on important neurodiversetopics.</p>" +
        "<p class='p-lg-0 m-lg-0 '>She is a member of the Society of Children's Book Writers and Illustrators, Story Teller Academy and Shiawassee Area Writers Group. Her first book is titled, 'Knock, Knock, Who’s There, Bear? A Story About Embracing Bipolar Disorder'. More information is available on her Facebook @GracelynKeysAuthor, Instagram @gracelynkeys_author and Pinterest @Gracelyn Keys - Children's Author sites.</p>" +
        "<p class='p-lg-0 m-lg-0 '>She has a bachelor’s of science degree from the University of Michigan in clinical community psychology and a master’s of science degree in business administration from Central Michigan University. She worked in the human services area for several decades helping families in need move forward, and later, at the statewide level helping program leaders solve important problems..</p>" +
        "<p class='p-lg-0 m-lg-0 '>She resides in Michigan, with her husband, her short-legged Dachshund dog, namedBruiser, and many rambunctious chickens. She lives a healthy outdoorsy lifestyle and loves spending time with her family, including eleven very busy, exuberant and fun-loving grandchildren.She resides in Michigan, with her husband, her short-legged Dachshund dog, named Bruiser, and many rambunctious chickens. She lives a healthy outdoorsy lifestyle and loves spending time with her family, including eleven very busy, exuberant and fun-loving grandchildren.</p>",

      "Jason Ranieri":
        "<p class=''>Jason D. Ranieri is a graduate of Worcester State University and was Freshman Class President. He graduated Cum Laude in his major, History. He passed the Massachusetts Educator's Exam with a perfect score in Economics. He is a 'Heroes Among Us' award recipient from the Boston Celtics organization for playing Santa Claus for physically and mentally handicapped at Wrentham Developmental Center for over 20 years. He graduated from the Massachusetts Leadership Academy and became a member of the political activist group, M-power. He successfully reinstated Mass.</p>" +
        "<p class=''>Health coverage of eye and dental exams for those in need through the Mass. House and Senate. He was nominated for the Worcester Telegram and Gazette's Young Leader Award. He is the author of the books, The Good Old World and Polka Dots and Politics. He is a vegetarian, Freemason and avid musician. Jason toured America for a year and a half.</p>",

      "Jay Payleitner":
        "<p class='p-lg-0 m-lg-0 '>Jay Payleitner spent a decade in major market advertising on Chicago’s Michigan Avenue, where he created award-winning radio, TV, and print campaigns for eggs, steaks, canned vegetables, Kroger, the Chicago Symphony, and Corona Beer. He wrote TV spots with Coach Mike Ditka for Midway Airlines and spearheaded the creative team that named Frito-Lay’s “SunChips.” Following God’s clear call, Jay served two decades as freelance radio producer working with Josh McDowell, Chuck Colson, TobyMac, Bible League, AWANA, National Center for Fathering, and others.</p>" +
        "<p class='p-lg-0 m-lg-0 '> As an advocate for fathers and families, Jay served as Executive Director for the Illinois Fatherhood Initiative and testified at the 2018 Responsible Fatherhood Listening Summit in Washington. He’s a national speaker on marriage, parenting, and getting life right, and has spoken at Iron Sharpens Iron conferences in 15 states. Most notably, Jay has written more than 25 books including The Prayer of Agur, 52 Things Kids Need from a Dad, What If God Wrote Your Bucket List? and The Jesus Dare (see thejesusdare.com).</p>" +
        "<p class='p-lg-0 m-lg-0 '>His books have been translated into nine languages and sold more than a half-million copies. He has been a guest multiple times on The Harvest Show, Moody Radio, and Focus on the Family. Jay and his high school sweetheart, Rita, live in St. Charles, Illinois where they raised five awesome kids, loved on ten foster babies, and are cherishing grandparenthood. For speaking engagements, media interviews, and creative partnership opportunities, track him down at jaypayleitner.com. </p>",

      "John Morgan Mullen":
        "<p class=' '>John Morgan Mullen owns a real estate development and consulting company specializing in urban infill, adaptive reuse, historic renovations, and community development properties. Morgan has played a major role in the warehouse loft conversion boom and gentrification of many Chicago neighborhoods valued at over $600 million.</p>" +
        "<p class=' '> Morgan attended Michigan State University, where he earned a BA in communication arts. He was a quarterback for Michigan State University on two National Championship teams in 1965 and 1966. Morgan credits athletics for honing and developing his dedication to hard work, leadership, teamwork, developing a game plan, and knowing your opponent's strengths and weaknesses as well as your own.</p>" +
        "<p class=' '>Married to his college sweetheart Jill since 1967, Morgan has two children, Todd and Stephanie. He and Jill are grandparents to Jake, Brennan, and Hailey. </p>",

      "Josef Tsau":
        "<p class=' '>Dr. Josef Tsau was born in 1936 in China, brought up in Taiwan, and immigrated to United States in 1970. He became a Ph.D. physical chemist of McGill University, and had a productive R&D career in the pharmaceutical industry. He developed several products, published fourteen papers, and held fourteen U.S. Patents. Tsau retired early in 1996 only to unexpectedly rediscover science and start his scientific revolution with this book. </p>",

      "Karen J Roberts":
        "<p class=' '>Award winning children's book author, Karen J. Roberts, was inspired to write stories promoting animal kindness and responsible pet ownership when she adopted her dog Louie from the Northeast Animal Shelter in Salem Ma. She has 15 books for children of all ages, helping develop a love of nature and animals using themes of friendship, family and teamwork. Karen has collaborated with many talented illustrators bringing bright and fun images to enhance the stories.</p>" +
        "<p class=' '>Karen is a two-time winner of the Indie Excellence Award, Three-time winner of the Feathered Quill Book Award, two-time winner of the Moonbeam Children's Book Award, a finalist in the International Book Awards, and winner of the eBooks2go Children's Book Contest.</p>" +
        "<p class=' '>All of the profits from the sale of Karen's books goes towards helping animal rescue groups and literacy programs. Karen's books are written, illustrated, published, printed and shipped in the USA. </p>",

      "Kathy Bornino":
        "<p class=' '>KATHY BORNINO, MA, LMFT has been a licensed Marriage and Family Therapist and Clinical Hypnotherapist for 30 years and a Clinical Past Life Regression Therapist certified by the International Board of Regression Therapy for 15 years. Previously she taught high school English for 5 years, and has taught Psychology classes in community colleges. For 25 years she has led a community education group for the Institute of Noetic Sciences, Petaluma California, which does cutting edge research on consciousness and alternative healing (see www.noetic.org)</p>" +
        "<p class=' '> She also spent 5 years on the board of the California Central Coast Jung Society and has been an active member of Edgar Cayce study groups.Previous book: 'Armchair Travel to Heal the Planet' (How to send distance healing rather than wailing at the news).</p>",

      "Leonard H. Roberts":
        "<p class='p-lg-0 m-lg-0 '>Leonard H. Roberts was born on February 19, 1949. Growing up in Chicago as the son of a Jewish mechanical draftsman, he spent his childhood going to school, playing games in the neighborhood, and confronting bullies and prejudice at a young age. Len married his high school sweetheart—and lifetime love—at the age of 18, and they would later have three daughters together.</p>" +
        "<p class='p-lg-0  m-lg-0 '>Leonard earned a bachelor's degree in Chemistry and Marketing from the University of Illinois in 1971, and he was a world-acclaimed food scientist by the age of 19. He also earned a law degree from DePaul University Law School and was admitted to the Illinois Bar in 1974. His remarkable career began as a food scientist at Central Soya while a high school senior, and then at Armour Foods, hired there during his junior year of college, and continued at Ralston Purina Company.</p>" +
        "<p class='p-lg-0 m-lg-0 '>Leonard made a name for himself in food science, marketing, and food service between 1968 and 1985, serving in key management positions. But his most lauded accomplishments were yet to come: incredible turnarounds at three Fortune 500 companies. First, he served as president and CEO of Arby's, Inc., where he is credited with engineering an acclaimed and dramatic revival of the company. Next, he repeated this feat as chairman and CEO of Shoney's, Inc., leading the second-largest restaurant chain in the country. Then he secured the triple crown with a third turnaround, this time as chairman and CEO of RadioShack Corporation, where he was the catalyst for the successful reinvention of a company. Along the way, he battled the corruption of Miami financier Victor Posner, and the extreme racism of Shoney's founder, Ray Danner, while protecting and promoting the interests of the companies he led, the people they employed, and the customers they served. His vision and leadership elicited major media coverage in outlets like USA Today, Forbes, The Wall Street Journal, Business Week, and others, and brought numerous industry accolades and awards.</p>",

      "Louis Garbis":
        "<p class=' '>Louis Garbis has a BS in Business Administration from the University of Illinois, Chicago, and an MBA from Roosevelt university. He has over 30 years of experience in the field of risk management and insurance.</p>" +
        "<p class=' '>From a young age, Lou has been a student of life, with a heavy focus on world history and other germane areas impacting our planet. 'We learn from the past to better our future.'</p>",

      "Lynda Vialet":
        "<p class='p-lg-0 m-lg-0'>Lynda Vialet is a single mother with two sons. She spends most of her time working and providing for her family. She loves to cook; decorate; and host parties, barbeques, and events. She was born and raised in Jamaica, Queens, New York. She grew up in a household where her mother was a stay-at-home mom, and her father worked very hard to provide for and protect the family. She is the second oldest of four and the first girl, so she learned a lot of her nurturing and caring ways from watching her mom take care of not only her and her siblings but a majority of the entire family. Her mom was exclusively known as the family babysitter, so Lynda was raised among all her cousins and even some neighbors. She attended John Adams High School in Ozone Park, New York, and graduated at the age of seventeen with a regent’s diploma.</p>" +
        "<p class='p-lg-0 m-lg-0'>Throughout her early career, she focused on the medical field, becoming a medical assistant and then a certified nursing assistant, as it was always her passion to help others. The tragic events depicted in this book, along with her passion, led her toward a career in the human services profession. While working a full-time job and being a full-time mother and grandmother, she decided to show her children that it’s never too late to follow your dreams. In December 2017, she accomplished a longtime goal of earning her college degree. She graduated from Ashford University Online with a bachelor’s degree in health and human services and a 3.36 GPA. She is an entrepreneur and now an accomplished author. She works as a tech support advisor while building a credit restoration agency. She currently resides in Atlanta, Georgia.</p>",

      "Marc Casciani":
        "<p class='p-lg-0 m-lg-0'>Marc Casciani is the founder of MindWolves where he has the opportunity to train professionals to craft their calling. He is part alpha wolf and part caring shepherd. Alpha wolves lead and defend their pack. Caring shepherds correct and heal their flock. The net effect is a courageous and compassionate helper that will help shape you to live up to the life which God called you. </p>",

      "Dr Meena Chintapalli":
        "<p class='p-lg-0 m-lg-0'>Dr. Meena Chintapalli came to USA as an 8 year old in 1960 and ever wanted to come back to this beautiful land of opportunities, land of freedom and spirit. Meena Chintapalli always cared for people for helping the patients to learn balancing emotional, social, intellectual and spiritual life. With a lot of hope re-entered USA on March 30th, 1976. She completed Pediatrics residency in Washington D.C 1976-78, and Ambulatory Pediatrics Fellowship of University of Michcigan, Ann Arbor program 1978-1980. Board certified in Pediatrics in 1980 and no boards for Ambulatory pediatrics in those days. She followed her spouse, leaving behind academic interests and worked as clinical instructor MCMC, Milwaukee. Started Pediatrics solo practice in 1983 and had to move again to final destination with her spouse to San Antonio, Texas in 1988.DR. MC held many positions. Was on Quality Assurance programs for Insurance companies, hospitals, Chaired as Pediatrics Director for neuropsychiatric facility; she was voted as the best Pediatrician locally, won woman of the year award in 1995 by San Antonio Mayor's committee, won awards for AACC for Professional and Community service. On March 30th, 2008 received award for Professional Excellence and Leadership from A.M.A. Foundation for incorporating neuroscience knowledge in daily practice and teaching community through T.E.C.P.D.S and for public lectures.</p>" +
        "<p class='py-lg-2'>Dr. MC is a clinical adjunct at UTHSCSA; trains students and PNP students. Is a Spiritual leader and started and serves through S.A.I, 501C-3 non profit, that does volunteer services at battered woman's shelter, jail district, Salvation Army, Boysville, Bexar county detention center, Children's shelter and many medical missions. In 2010 was chosen as the World Physician. Is recognized by International, America's and Marqui's Who's Who 2004-2008.Wrote her first book on brain nurture from all evidence based medical literature review and integrated Spirituality and gave the curriculum that is a multi sensory integration for Body-Mind-Soul connection in 2004 titled 'Brain, Mind, SAI Educare.'The second book is with the knowledge of how children need to be protected from Zero to 3 years and create pathways for better states, traits and future. Dr. Chintapalli hopes to reach to educators, administrators and parents through this book so that we create A BETTER WORLD WITH PREVENTIVE MEASURES FOR SPECTRUM, ADHD and Learning disorders.This third book is a revision of the second book.She developed scales for measuring human character on the 4 tenets that she worked on, was given in the very first publication, and will present in the future along with ctrauma focused Cognitive Behavior management strategies.</p>",
      "Emerich Roth":
        "<p class='p-lg-0 m-lg-0'>Emerich Roth, born in 1924, came to Sweden in December 1950 after miraculously surviving the barbarism of Nazism in five different concentration camps. He co-founded the Association of Holocaust Survivors with the aim of spreading knowledge - mainly in schools - about the events during World War II and preventing racism from gaining a foothold in our society. With 30 years of experience in social care among excluded and hateful people, he knows that there is a way out of hatred. - Most of the excluded young people find it terribly difficult to be constantly filled with hatred and to be hated by others. Deep down, most people want to meet someone who understands what it's really about, someone who helps them become the person they deep down want to be. These are truths I have experienced in encounters with young people who have dropped out of various destructive gangs. Since 1992, Emerich Roth has lectured in schools around Sweden. Lectures and conversations with students at over 1600 schools have left a strong impression. Over the years, Emerich has received many thousands of letters, in which the students he met open up and tell about their reactions, describe their own lives and experiences of, among other things. violence and bullying. Emerich often lectures together with former so-called Nazis / racists who make a valuable contribution in the fight to turn hatred and violence into tolerance and compassion.</p>" +
        "<p class='py-lg-2'>Emerich Roth founded EXIT to support destructive and violent young people breaking away from gangs and crime. Sadly, Emerich passed away in January of 2022 at 97 years old. His diligent work in schools against violence, xenophobia, hatred, and bullying has over the years received great media attention. Emerich has received several awards for his tireless efforts. In 2008 he was awarded the Nelson Mandela Prize, and in 2011 the Knowledge Prize with the motivation: 'Because he with admirable perseverance spreads knowledge about how we can counter violence, racism and hate crimes. With his background from the Nazi concentration camps, he has great credibility when he in books, in associations and above all through countless visits to schools in front of their message '. In 2012, Emerich Roth received the Swedish Heroes' Life Deed 2012 award, which is arranged by Aftonbladet and broadcast on TV4.</p>",

      "J.Price":
        "<p class=''>J. Price is an avid author, artist, motorcycle mechanic, and researcher who lives and rides in the U.S.A. </p>",
      "Brandon Iwan":
        "<p class='p-lg-0 m-lg-0'>Brandon Iwan is an up-and-coming author with a passion for his work and darker and mysterious expressions. His first book, Testament in Black, was written with great thought, and he would love to share it with you all.</p>",
   
      "Allen Lowe":
        "<p class='p-lg-0 m-lg-0'>Allen Lowe is a saxophonist and American music historian, who has recorded as a leader with Julius Hemphill, Don Byron, Marc Ribot, Lewis Porter, Roswell Rudd, Ken Peplowski, Nels Cline, Erin McKeown, Gary Bartz, David Murray, Kalaparusha, DJ Logic, Ursula Oppens, Doc Cheatham, Loren Schoenberg, JD Allen, Noah Preminger, Bob Neloms, and others. He has released over 20 compact discs under his own name; his last project, an 8 CD retrospective of his career, <span class='fw-bold'>Disconnected Works, 1980–2018,</span> was released on ESP DISK in 2019.</p>",
    
        "Bob Marks":
        "<p class='p-lg-0 m-lg-0'>Bob Marks was born in Manhattan in 1942. A graduate of Long Beach High School in Long Beach, New York, Bob Marks attended Rider College in Lawrenceville, New Jersey. His experience in the Standardbred sport began when he started attending races at Roosevelt and Yonkers in 1960. He has written continuously about the sport during six decades. Marks submitted articles to Trotter Magazine in 1964 and later became a regular contributor and editor for Trotter Weekly. He handicapped for Top Trotter's daily tip sheet from 1966 to 1978 and was among the original chart commentators for Sports Eye at Roosevelt and Yonkers starting in 1968. Marks authored the first <span class='fw-bold'>Race of the Decade</span> in 1971 , published initially by Rottkamp Press and later featured in Hub Rail magazine. He wrote countless articles for Hub Rail during the 1970s and 1980s, providing two-year-old prognostications for the publication for fifteen consecutive years as well as numerous pedigree-based articles. Marks served as harness handicapper for Only Turf's Best (the original OTB Blue Sheet) for 10 years and as handicapper and operator of Orange Horse tip sheet at the Meadowlands from 1976 to 1989.</p>" + 
        "<p class='p-lg-0 m-lg-0'> He was host of <span class='fw-bold'> Accent on Racing </span>on Meadowlands Cablevision from 1980-1985 and also for <span class='fw-bold'>Racing from Roosevelt</span> in 1982. As a pedigree analyst, Marks served as consignment manager for Boardwalk Associates from 1982 to 1985, and then operated Bob Marks Consulting for multiple clients in the late 1980s. He authored and edited Inside Boardwalk from 1982 to 1985, and <span class='fw-bold'>Memoirs in a Random Line </span>, covering 40 years of harness observations for Times: in Harness in 2002. Marks went to work at Perretti Farms in Cream Ridge, New Jersey in 1988 as pedigree analyst and marketing director. Marks engaged in diverse tasks for Perretti including writing newsletters and over 1,000 advertisements, selling horses at public auction and market placement. He wrote more than 500 <span class='fw-bold'>Trotlines</span> columns for the farm's website. He also named more than 2,000 horses. Marks produced stallion videos for No Nukes, Matt's Scooter, Run The Table, Presidential Ball, Harmonious, Malabar Man, Muscles Yankee and others. Since 1990 he also worked on audio scripts for Perretti Farms yearling videos. Marks still writes regularly for Hoof Beats and has published 500 pages of his informative 'Trotlines' column on the farm's website.  Trotlines has appeared in Hoof Beats magazine periodically over the last five years .</p>",
        "Dr. Burliss Parker":
          "<p class='p-lg-0 m-lg-0'>Dr. Burliss Parker earned his Master's and Doctor of Ministry degrees from Ashland Theological Seminary in Ashland, Ohio. For 10 years he served as a district superintendent, and for more than 25 years has worked to bring restoration and healing to churches and congregations. The steps outlined in From Ruins to Rebuilding are a direct result of his ministry with these churches and from his own personal journey of rebuilding.</p>",
      
        "C.A. Reagan":
          "<p class='p-lg-0 m-lg-0'>C.A. Reagan spent many years working in the oil industry traveling the US and several foreign countries selling drilling equipment. Born in a small town in West Texas he spent countless hours in his youth reading such authors as Isaac Asimov, Robert Heinlein, and Ray Bradbury. In later years when time would allow, reading books by many of the fine authors of the day planted the idea of writing in his mind. After retirement what started as a hobby quickly became a passion Beginning his work in the oil industry during the early 70’s, he is now retired, living in Texas with his wife Cheryl. With their family raised the couple now have a dream of sailing the world together. </p>",
      
        "Catherine Matsalla":
          "<p class='p-lg-0 m-lg-0'>Catherine has been a teacher, coach, and financial planner but her passion in life involves exploring the world, learning from others, and transforming it into meaningful prose. Her happy place is running and camping in the mountains with her dogs and spending time with friends and family. She is a successful Ironman competitor with the highlight of competing in the World Championship and in Patagonman in Chile. She continues to seek new adventures in life, sport, spirituality, and in writing.</p>",
      
        "Catherine Matsalla":
          "<p class='p-lg-0 m-lg-0'>Catherine has been a teacher, coach, and financial planner but her passion in life involves exploring the world, learning from others, and transforming it into meaningful prose. Her happy place is running and camping in the mountains with her dogs and spending time with friends and family. She is a successful Ironman competitor with the highlight of competing in the World Championship and in Patagonman in Chile. She continues to seek new adventures in life, sport, spirituality, and in writing.</p>",
      
        "Daniel Rodriquez":
          "<p class='p-lg-0 m-lg-0'>World Space League was created in 1999 when Daniel Rodriquez's son John wrote a letter which said “When I grow up I'm going into space with my Dad.”  Kombaat B.E. is the beginning of a journey that started almost 20 years ago. Daniel has had many titles, from Top Gun Air Intercept Controller in the Navy, Computer Network Engineer for businesses, law firms, and Indian tribes. Now he holds the title of Author.</p>",
      
        "Deb Huntley":
          "<p class=''>Deb Huntley is a meditation educator with 50 years experience in Buddhism. She started her contemplative path in 1969 visiting Tassajara Zen Center shortly after attending Woodstock. That three day Thanksgiving visit to the California mountain Zen center and meeting Suzuki Roshi changed the course of her life by his uplifting presence. After Suzuki died, she met and studied with the head the Nyingma school of Tibetan Buddhism, H.H. Dudjom Rinpoche who became her “root guru,” and lived at his center in Ashland, Oregon while she earned her teaching degree at Southern Oregon University. In Boulder Colorado, she earned a MA Contemplative Psychotherapy degree at Naropa University and studied mindfulness awareness with Trungpa Rinpoche for eight years. When the Dalai Lama visited Boulder, she was privileged to act as one of his guards during the time he visited and taught. Deb met Thich Nhat Nhnh at Naropa after Trungpa died, and studied with him for six years in CO, CA, and in Southern France at his monastery Plum Village.</p>"+
          "<p class=''> She was ordained in the Rinzai Zen lineage of Thich Nhat Hanh and Prabhasa Dharma Roshi and became a mindfulness teacher. After Prabhasa Dharma Roshi’s death, Deb studied and practiced with Joko Beck for 16 transformative years until Joko's death. Deb has integrated her pedagogy experiences of public education, Waldorf education, Montessori methods, and listening to Krishamuti in his oak grove with her mindfulness training and insights. Currently she maintains her educational website www.zenhomeschool.org and a contemplative consultation practice in Eugene, Or where she lives on the Willamette River.</p>",
      
        "Debbie Stevens":
          "<p class=''>I am Debbie Stevens. I wrote My Family Cookbook: Mothers Against Hunger to help kids. Janet Chapman (author) was my mentor when she was alive. She never let me give up. What I didn't realize is that she changed my life forever. That is why I wanted to do something special to honor her.</p>"+
          "<p class=''>Part of the profits from the cookbook will go to helping kids get school lunches, backpacks,and warm winter coats. Thank you, Janet Chapman, for not letting me quit and telling me that the journey was worth it. It really has been an amazing journey.</p>"+
          "<p class=''>I am a wedding and food photographer and food stylist.</p>",
      
        "Don Segal":
          "<p class=''>Don Segal lives in Brewster Massachusetts. He has published poems in Deep Waters and Music in the Air anthologies (Tall Grass Writers Guild), Little Blessings anthology (Whispering Angel Books), Blue Line (Potsdam College, Potsdam, NY), zomagazine.com as well as many other poetry journals. His drawings, landscape photography as well as poetry are included in his blog at donsegal.wordpress.com.</p>",
      
        "Jack McNaughton":
          "<p class=''>Jack McNaughton has a Master’s in Change, Management, and Leadership from York St. John University in England. He has been responsible for the listing of over 20 companies on exchanges in Europe, North America and Australia with a combined market capitalization above $1.5 billion. He has also been involved with dozens of start-ups and has overseen the raising of more than $100 million in funding for these start-ups. He has created and managed a global network specializing in business creation. He has taught at the MBA level as an Assistant Professor in the Entrepreneurship stream. He is now consulting to several new start-ups and acts as a mentor to several entrepreneurs.</p>",
      
      
        "Jake Townsend":
          "<p class=''>My name is Jake S.Townsend. I live in Washburn, Missouri and out in the country. I have always been interested in writing and took this up is 2005 for a hobby and in 2018, I self-published my very first book <span class='fw-bold'>Tales from Missouri</span>. I had 67 copies of it for sale and I sold 64 of them on my own. I have written stories on Native American, Dance, Romance, Faith, Grief, humor. I can write about the hardest things with ease. My new set book I am working on now is called <span class='fw-bold'> The Trial for Freedom </span> It is a faith and sci-fi story about a Latino President of the US getting ready to defend his stand against a Congress that wanted him out. I am hoping to get this one published soon.</p>",
      
        "Jason Dankert":
          "<p class=''><span class='fw-medium'>One of the worst things we can experience and feel in life is regret.</span> Author Jason Dankert shares with us his lifelong mentality of always going for what he wants (the girl, promotion, etc) and not having that crippling feeling of regret. This mentality has produced the crazy, entertaining, and unique experiences that he shares with you in a humorous, creative, and sometimes crude way.</p>",
      
        "Joseph J Allen":
          "<p class=''>Joe is a father, entrepreneur, Eagle Scout and UCLA graduate with other passions including adventure travel, music, art and enjoying his children.</p>",
      
        "Judy Young":
          "<p class=''>Judy Young began teaching Speech and Accent Reduction in 1991. She had attended Columbia College Chicago, where she studied writing, communications and media arts and broadcasting. She later studied speech and acting at the Ted Liss Studio in Chicago, now known as the Chicago Actor's Studio. There she received extensive speech training from the late Ted Liss, then one of the top voice talents and speech instructors in the U.S. Among the alumni of the Ted Liss Studio are Virginia Madsen, Karl Malden, Tom Bosley, Geraldine Page and Robert Urich. Judy originally taught speech and accent reduction only to actors. Realizing that this technique could be applied to help any person of any nationality, she refined and improved on what she had learned to help anyone to speak English more clearly and effectively. To date, she has successfully worked with over 50 different nationalities including German, Hindi, Korean, Chinese, Russian, French, Italian and Spanish, among many others. Judy teaches private and group lessons and webinars all over the world via Skype and Zoom.</p>",
      
      
        "Kathy Stacey":
          "<p class=''>Kathy Stacey was born and raised in Edmonton Alberta, After High School she trained to be an Art Agent and then later decided to open a Zombie Themed Bath Bomb Company called Zombomb where people could resurrect their skin from the dead! She a previously published authors and has written a dog cookbook. <span class='fw-bold'>Dog Food, a Canine Cuisine</span> and was requested and shown on a morning talk show in Moberly, MO entitled <span class='fw-bold'>The Home Show</span> on the topic of cooking for your pets. Besides having an addiction to long baths she also finds horror writing just as satisfying.</p>",
      
        "Larry Ventresca":
          "<p class=''>Larry Ventresca, president for VFG Group Inc. Twenty-five years experience in providing clients with expertise in financial consulting, financial planning, life insurance, brokerage investing (mutual funds/stocks), health insurance, debt consolidation and estate planning. </p>",
      
        "M.K. Hoffman":
          "<p class=''>M.K. Hoffman is a Vietnam veteran and responsible citizen who always looks out for his fellow Americans. He hopes his story will help shine a light on some of the nation's most important issues and hold those on Wall Street accountable for the great recession that transpired in 2008. When Hoffman is not busy fighting corruption, he spends his time fishing, hitting the links, and playing tennis.</p>",
      
        "Maka Sepashvali":
          "<p class=''>Maka Sepashvili is from Tbilisi, Georgia. She is the author of short stories, detective stories, translations, and the following books: <span class='fw-medium'>“The City of Masks”</span>, <span class='fw-medium'>“The Gordian Knot”</span>, <span class='fw-medium'>“Saraburi”</span>, <span class='fw-medium'>“Crime Won't Happen Again”</span>, <span class='fw-medium'>“Where is the Letter from My Friend”</span>, and <span class='fw-medium'>“Main Colors”</span>. Maka has earned several awards for her books. <span class='fw-medium'>“The City of Masks”</span> received the prestigious Alaverdi and <span class='fw-medium'>“The Way Which Leads”</span> won the annual One Novel Competition in Georgia. Additionally, her detective stories are published in the 8th volume of  <span class='fw-medium'>“Georgian Detective Stories ”</span>, and her short stories and fairy tales are printed in numerous magazines. </p>",
      
        "Marcus Armantrout":
          "<p class=''>Marcus Armantrout grew up with a fascination with monsters and folklore. He is a writer of horror and the occult, writing stories of what could be lurking in the dark and bringing our fear of the unknown to life.</p>",
      
        "Margaret Podmore Emery":
          "<p class=''>Margaret Podmore Emery, like many other school girls, read every horse-related book she found, from Anna Sewell's Black Beauty, Marguerite Henry's offerings, every entry in Walter Farley's Black Stallion series, and any other author who incorporated horses in any way in the story line. In high school, she would create her own (horse-related) stories instead of paying attention in class. She has researched, written and revised Faces & Lies off and on during a lifetime of work-related (but not horse-related) writing assignments: feature writer for a weekly newspaper, newsletter design and layout for a parents' group, office procedures manual and correspondence writing, editing and revision for a government agency. In retirement, she decided now or never, publication-wise, for her constantly-evolving manuscript. She hopes someday her granddaughter, who pronounced herself a cowboy girl during a pony ride, will find it interesting.</p>",
      
          "Mark D. Estes":
          "<p class=''>Mark D. Estes grew up in the small town of Mattapoisett, Massachusetts, where he still lives with his wife of 26 years, Evelyn and two stepsons–one of which he adopted. His interests include science, sales, motivational speaking, and volunteer work. He has helped support The Salvation Army and The American Cancer Society and co-founded The Brain Tumor Support Group of Maine.  </p>"+
          "<p class=''>Throughout his life, Mark has been a dedicated student of self-improvement. He’s learned from the greats such as Napoleon Hill, Earl Nightingale, Zig Ziglar, and Harvey Mackay. Additionally, Mark has spent hundreds of hours on research, attended sales seminars, read dozens of books, and taken life coach training so he can help his clients in the construction industry grow their business and improve their quality of life.</p>"+
          "<p class=''>Mark is often told that he has the gift of encouragement. His goal is to use it to help others achieve success and be the best they can be.</p>",
          
          "Mark Reasoner":
            "<p class=''>Mark Reasoner is a Hoosier by birth, a teacher by profession, and a storyteller by nature. Born and raised in Indiana, he now lives and writes in Neptune Beach Florida. His previous writings have appeared in Folio Weekly, the DeKalb Literary Arts Journal, the Florida Times Union and various corporate publications. Several of his short stories appeared in the collections, Snowbird Christmas Volume Two & Volume Three. His first novel, ONE LAST KICKOFF was published in 2014.</p>"+
            "<p class=''> He is currently employed as a software trainer, where part of his job is developing and writing full narrations for computer-based training sessions, then recording the results. Married to Karen Stewart (aka The Fix-it Sister) for over thirty years, Mark spends much of his non-writing time trying to stay out of the way when she gets loose with her power tools. A two-time honoree of the Royal Palm Literary Awards, given by the Florida Writers Association, a first place in 2011 in the category, General Fiction.</p>",
        
          "Michelle Murray":
            "<p class=''>Michelle is a married working mother of two fine young men (her children). She lives in Wisconsin. When not writing, she enjoys reading, especially science fiction/fantasy and classics. Her favorite authors include Shakespeare, Mark Twain, Margaret Weiss, and Colleen Houck. She also enjoys doing painting and crafts, and spending time with her family. She enjoys going for walks, and swimming.</p>"+
            "<p class=''>She has been known to jump in Lake Michigan with no life jacket! She has been writing since high school. Michelle took a break from writing to concentrate on raising her children. She has an app on her IPad that gives her a word of the day and poem of the day. Michelle has had many poems and short stories published in anthologies. She has been featured in Who's Who Among American Poets.</p>",
        
          "Mirela Kanini":
            "<p class=''>Mirela Kanini emigrated from Eastern Europe to USA in the nineties. She has published several books in her home country, Albania, and <span class='fw-medium'> The Sins of Mrs.Ema </span> is being published for the first time in America. </p>"+
            "<p class=''>Kanini is married and has two children. She lives in a northern Suburb of Chicago, Illinois.</p>",
        
        
          "Nadia Mau Bernardy":
            "<p class=''>Nadia Mau Bernardy is a Spiritual Life Coach, intuitive business mentor, and writer based in Maui, Hawaii. She graduated with a Bachelor of Arts Degree in Graphic Design, Web Design, and Marketing from the Southwest University of Visual Arts in Albuquerque, NM in December of 2007. After graduating she helped grow an unknown tech startup into an international brand, all while working from her laptop in Hawaii.</p>"+
            "<p class=''>Nadia now helps women and men go from career burnout to soul-led lifestyle through life coaching, online courses, and workshops. When she is not coaching, she loves to explore her island home with her husband and daughter.</p>",
        
          "Rose Hale":
            "<p class=''>A growing Christian that has been working on this book off and on since college. It's my desire to inspire anyone who may be going through valleys in their life by reminding them that God does care and He answers prayers.</p>",
        
          "Stephen Juracka":
            "<p class=''>Dr. Stephen Juracka has been an educational leader for over two decades. His writing is grounded in the research around organizational leadership, organizational design and positive psychology. Today, Dr. Juracka supports leaders across multiple industries as both a coach and a consultant.</p>",
        
          "Sweet Sue Kouchis":
          "<p class=''>Susan Kouchis <span class='fw-bold'> Sweet Sue </span> is a sales professional from Chicago who has been selling for 34 years. I want to share new tricks, and golden nuggets of wisdom with the world, especially in this new world of selling.</p>"+
            "<p class=''>I'm not a writer—I am a fifty-nine-year-old sales professional, a wife, and a mother who wants to help others. My book is real, raw, and from the heart.</p>",
        
          "Teresa Spangler":
          "<p class=''>Founder & CEO, PlazaBridge Group</p>"+
          "<p class=''>Teresa wears multiple hats as Founder and CEO of PlazaBridge Group, a social entrepreneur, innovation expert, growth strategist, author and speaker (not to mention mother, wife, bandleader and so much more). Teresa held executive positions at Red Hat Software where she was responsible for leading revenue growth pre and post IPO. Teresa is a member of the Forbes Technology Council and lead singer and guitarist for the Headless Chickens.</p>"+
          "<p class='fs-6 fw-bold p-lg-0 m-lg-0 p-md-0 m-md-0'>Teresa's blogs and articles can be found here:</p>"+
         "<p class='p-lg-0 m-lg-0 p-md-0 m-md-0 fw-medium'> <a class='' href='https://www.forbes.com/sites/forbestechcouncil/people/teresaspangler1/#55f7799b1fd0'>Bestechcouncil</a></p>"+
         "<p class='p-lg-0 m-lg-0 p-md-0 m-md-0 fw-medium'> <a class='' href='https://www.plazabridgegroup.com/category/musings/'>Plazabridgegroup</a></p>"+
         "<p class='p-lg-0 m-lg-0 p-md-0 m-md-0 fw-medium'> <a class='' href='https://www.linkedin.com/in/teresawspangler/'>Teresawspangler</a></p>",
          
         "William Mierzejewski":
          "<p class=''>William A. Mierzejewski likes to go by Bill when he is back home in Chicago, Illinois. Or simply Dad when he's with his family. He is a proud family man who's married to the love of his life, Ann, and blessed with his two children, Liam and Becca (Boo).</p>"+
            "<p class=''><span class='fw-medium'>The Local Legend of Iron River: The Liam and Boo Series</span> is the first installment of a series of books that feature his children as the main characters. In this first fictional adventure, Liam is a 10-year-old boy, and Boo is an 8-year-old girl. The idea for the Liam and Boo series began while Bill and his family were vacationing in the Upper Peninsula of Michigan and blossomed into a thrilling adventure novel for young adolescents. Bill enjoyed writing while attending college, but his professional life began in his early twenties when he became a full-time firefighter/EMT.</p>"+
            "<p class=''>For the last fifteen years, he has proudly worked as a full-time firefighter/EMT for a large Midwest fire department. Bill spent his childhood on the Northeast side of Philadelphia, where his father also worked as a firefighter. His family moved to the Midwest during his young adolescent years, where he attended both high school and college. Bill is a graduate of Hinsdale South High School, College of DuPage, and Benedictine University in Illinois.</p>"
        
        };
        
    const authorInfoDiv = document.getElementById("authorInfo");
    if (title && image) {
      // Author information exists, proceed with rendering

      // Create a div for the author image
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("author_img");
      const imageElement = document.createElement("img");
      imageElement.src = image;
      imageElement.alt = title;
      imageDiv.appendChild(imageElement);
      authorInfoDiv.appendChild(imageDiv);

      // Set the content of .author-book-heading div
      // const authorBookHeadingDiv = document.querySelector(
      //   ".author-book-heading"
      // );
      // authorBookHeadingDiv.textContent = ;
      
      // Set the content of .author-book-heading div
const authorBookHeadingDiv = document.querySelector(".author-book-heading");
if (title === "Courtney Pahlke" || title === "J.Price"|| title === "Karen J Roberts"|| title === "John Morgan Mullen"|| title === "Dr. Burliss Parker"|| title === "Maka Sepashvali"|| title === "Mark Reasoner"|| title === "William Mierzejewski") {
authorBookHeadingDiv.textContent = title + "'s Books";
} else {
authorBookHeadingDiv.textContent = title+"'s" + " Book"; // Hide the heading for other authors
}

      // Create a div for the author details
      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("author_details", "px-3");
      const titleParagraph = document.createElement("p");
      titleParagraph.classList.add("title", "text-dark", "fw-bold", "fs-5");
      titleParagraph.textContent = title;
      detailsDiv.appendChild(titleParagraph);

      // Add description paragraph corresponding to the title
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.classList.add(
        "author-description",
        "mt-3",
        "paragraph"
      );
      descriptionParagraph.innerHTML =
        descriptions[title] || "Description not available";
      detailsDiv.appendChild(descriptionParagraph);

      // Add social media links
      const socialMediaDiv = document.createElement("div");
      socialMediaDiv.classList.add("social_media", "mt-4");
      if (title === "Alia Almoayed") {
        socialMediaDiv.innerHTML = `
                <a href="https://aliaalmoayed.com/"><i class="fa-solid fa-globe"></i></a>
                <a href=" https://www.facebook.com/alia.almoayed.5 "><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/aliaalmoayed/"><i class="fa-brands fa-instagram"></i></a>
                <a href=" https://twitter.com/aliaalmoayed"><i class="fa-brands fa-x-twitter"></i></a>
                `;
      } else if (title === "Antoine D.Moss") {
        socialMediaDiv.innerHTML = `
                <a href=" https://antoinemoss.com/"><i class="fa-solid fa-globe"></i></a>
                <a href=" https://www.facebook.com/themanofinspiration "><i class="fa-brands fa-facebook"></i></a>
                <a href=" https://www.instagram.com/manofinspiration/ "><i class="fa-brands fa-instagram"></i></a>
                <a href=" https://twitter.com/2positivetweets"><i class="fa-brands fa-x-twitter"></i></a>
                <a href=" https://www.linkedin.com/in/antoine-d-moss-ph-d-19a9576"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="  https://www.youtube.com/drantoinemoss "><i class="fa-brands fa-youtube"></i></a>
                  `;
      } else if (title === "Alex Rodriguez") {
        socialMediaDiv.innerHTML = `
                <a href="https://www.facebook.com/alexrdtwriter"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/alexrdt_writes/ "><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.goodreads.com/author/show/22053460.Alex_Rodriguez"><i class="fa-brands fa-goodreads"></i></a>
                `;
      } else if (title === "Brandi Parsons") {
        socialMediaDiv.innerHTML = `
               
                <a href="https://www.facebook.com/brant.vickers.3/"><i class="fa-brands fa-facebook"></i></a>
              
                `;
      } else if (title === "Brant Vickers") {
        socialMediaDiv.innerHTML = `
                <a href="https://www.facebook.com/brant.vickers.3/"><i class="fa-brands fa-facebook"></i></a>
                `;
      // } else if (title === "Dr.Carolyn Scott") {
      //   socialMediaDiv.innerHTML = `
      //           <a href="#"><i class="fa-solid fa-globe"></i></a>
      //           <a href="#"><i class="fa-brands fa-facebook"></i></a>
      //           <a href="#"><i class="fa-brands fa-instagram"></i></a>
      //           <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      //           `;
      } else if (title === "Kathryn Cervera") {
        socialMediaDiv.innerHTML = `
                <a href="https://www.facebook.com/kathryncerveraauthor/ "><i class="fa-brands fa-facebook"></i></a>
                <a href=" https://www.instagram.com/kathryncervera6/ "><i class="fa-brands fa-instagram"></i></a>
                <a href=" https://twitter.com/CerveraKathryn"><i class="fa-brands fa-x-twitter"></i></a>  `;
      } else if (title === "Courtney Pahlke") {
        socialMediaDiv.innerHTML = `
                 <a href="https://www.courtneyleighpahlke.com/courtneyleighpahlke"><i class="fa-solid fa-globe"></i></a>
                <a href=" https://www.facebook.com/courtneyleighpahlke "><i class="fa-brands fa-facebook"></i></a>
                <a href=" https://www.instagram.com/courtneyleighpahlke/ "><i class="fa-brands fa-instagram"></i></a>
                <a href=" https://twitter.com/CourtneyLPahlke"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.goodreads.com/author/show/19146881.Courtney_Leigh_Pahlke"><i class="fa-brands fa-goodreads"></i></a>
                `;
      } else if (title === "Curse Queen") {
        socialMediaDiv.innerHTML = `
        <a href="Author.Curse.Queen@Gmail.com"><i class="fa-regular fa-envelope"></i></a>
                <a href="https://www.facebook.com/Author.Curse.Queen "><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/curse.queen/ "><i class="fa-brands fa-instagram"></i></a>
               `;
      } else if (title === "Deanna King") {
        socialMediaDiv.innerHTML = `
                 <a href="https://deannakingwriting.com/ "><i class="fa-solid fa-globe"></i></a>
                <a href=" https://www.facebook.com/deannakingwriting"><i class="fa-brands fa-facebook"></i></a>
                <a href=" https://www.goodreads.com/author/show/19241704.Deanna_King "><i class="fa-brands fa-goodreads"></i></a>
                <a href="https://www.instagram.com/deanna.king777/ "><i class="fa-brands fa-instagram"></i></a>
                <a href=" https://twitter.com/DKingNovelist"><i class="fa-brands fa-x-twitter"></i></a>
                `;
      } else if (title === "Devaughn Lily") {
        socialMediaDiv.innerHTML = `
        <a href=" https://www.facebook.com/devaughn.lilly "><i class="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/DeVaughnLilly"><i class="fa-brands fa-x-twitter"></i></a>
        `;
      } else if (title === "Gracelyn Keys") {
        socialMediaDiv.innerHTML = `
        <a href="https://gracelynkeyskids.com/ "><i class="fa-solid fa-globe"></i></a>
        <a href=" https://www.facebook.com/GracelynKeysAuthor "><i class="fa-brands fa-facebook"></i></a>
        <a href=" https://www.instagram.com/gracelynkeys_author/"><i class="fa-brands fa-instagram"></i></a>
        `;
      } else if (title === "Jason Ranieri") {
        socialMediaDiv.innerHTML = `
                <a href=" https://www.facebook.com/devaughn.lilly "><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/DeVaughnLilly"><i class="fa-brands fa-x-twitter"></i></a>
                `;
      } else if (title === "Jay Payleitner") {
        socialMediaDiv.innerHTML = `
        <a href="https://jaypayleitner.com/ "><i class="fa-solid fa-globe"></i></a>
        <a href=" https://www.goodreads.com/author/show/1169999.Jay_Payleitner"><i class="fa-brands fa-goodreads"></i></a>
        <a href="https://www.facebook.com/jaykpayleitner "><i class="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/jaypayleitner "><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.youtube.com/channel/UC5U-CJJ-6d_ykbZI_GA-x7w/featured"><i class="fa-brands fa-youtube"></i></a>
        `;
      } else if (title === "John Morgan Mullen") {
        socialMediaDiv.innerHTML = `
        <a href="https://www.facebook.com/jaykpayleitner "><i class="fa-brands fa-facebook"></i></a>
        `;
      } else if (title === "Josef Tsau") {
        socialMediaDiv.innerHTML = `
                <a href="https://www.facebook.com/people/Dr-Josef-Tsau/100087090805867/"><i class="fa-brands fa-facebook"></i></a>
                `;
      } else if (title === "Karen J Roberts") {
        socialMediaDiv.innerHTML = `
        <a href="https://www.facebook.com/thelittlebluedog "><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.goodreads.com/author/show/6490683.Karen_J_Roberts "><i class="fa-brands fa-goodreads"></i></a>
                <a href="https://www.instagram.com/thelittlebluedog/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.twitter.com/KRoberts_Author"><i class="fa-brands fa-x-twitter"></i></a>
                `;
      } else if (title === "Kathy Bornino") {
        socialMediaDiv.innerHTML = `
        <a href=" https://kathybornino.com/ "><i class="fa-solid fa-globe"></i></a>
        <a href="https://www.facebook.com/people/Kathy-Bornino-MA-Past-Life-Regression-Therapist/61554828613011/"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/healingtraveler "><i class="fa-brands fa-x-twitter"></i></a>
        `;
      } else if (title === "Leonard H. Roberts") {
        socialMediaDiv.innerHTML = `
                 <a href=" https://www.leonardhroberts.com/ "><i class="fa-solid fa-globe"></i></a>
                <a href=" https://www.facebook.com/people/Leonard-H-Roberts/61550725092944/ "><i class="fa-brands fa-facebook"></i></a>
                <a href=" https://www.instagram.com/leonardhrobertsauthor/ "><i class="fa-brands fa-instagram"></i></a>
                `;
      } else if (title === "Louis Garbis") {
        socialMediaDiv.innerHTML = `
                 <a href="https://gantecpublishing.com/louis-garbis/ "><i class="fa-solid fa-globe"></i></a>
                <a href="https://www.facebook.com/louis.garbis.author "><i class="fa-brands fa-facebook"></i></a>
                `;
      // } else if (title === "Lynda Vialet") {
      //   socialMediaDiv.innerHTML = `
      //   <a href="#"><i class="fa-solid fa-globe"></i></a>
      //   <a href="#"><i class="fa-brands fa-facebook"></i></a>
      //   <a href="#"><i class="fa-brands fa-instagram"></i></a>
      //   <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      //   `;
      } else if (title === "Marc Casciani") {
        socialMediaDiv.innerHTML = `
                  <a href="https://mindwolves.com/ "><i class="fa-solid fa-globe"></i></a>
                  <a href="https://www.linkedin.com/in/coach-c "><i class="fa-brands fa-linkedin"></i></a>
                  <a href="https://twitter.com/MarcCasciani"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.youtube.com/channel/UCjRJUTCpEtZfUO1OoQI5B8w "><i class="fa-brands fa-youtube"></i></a>
                  `;
      } else if (title === "Dr Meena Chintapalli") {
        socialMediaDiv.innerHTML = `
                    <a href="https://www.linkedin.com/in/meenakshi-chintapalli-7b568321/ "><i class="fa-brands fa-linkedin"></i></a>
                    `;
      } else if (title === "Emerich Roth") {
        socialMediaDiv.innerHTML = `
                              <a href="https://emerichfonden.nu/ "><i class="fa-solid fa-globe"></i></a>
                              <a href=" https://www.facebook.com/emerich.roth "><i class="fa-brands fa-facebook"></i></a>
                              `;
      // } else if (title === "J.Price") {
      //   socialMediaDiv.innerHTML = `
      //                 <a href="#"><i class="fa-solid fa-globe"></i></a>
      //           <a href="#"><i class="fa-brands fa-facebook"></i></a>
      //           <a href="#"><i class="fa-brands fa-instagram"></i></a>
      //           <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      //                         `;
      } else if (title === "Brandon Iwan") {
        socialMediaDiv.innerHTML = `
            
             <a href="https://www.facebook.com/people/Brandon-Iwan-Author/61554825851723/"><i class="fa-brands fa-facebook"></i></a>
             <a href="https://www.goodreads.com/author/show/47832984.Brandon_Iwan"><i class="fa-brands fa-goodreads"></i></a>
            
             `;
      }
      else if (title === "Catherine Matsalla") {
        socialMediaDiv.innerHTML = `
            <a href="https://getme2cat.wixsite.com/catherine-matsalla "><i class="fa-solid fa-globe"></i></a>
             <a href=" https://www.facebook.com/MatsallaAuthorThroughTheEyesofBlue "><i class="fa-brands fa-facebook"></i></a>
             <a href=" https://www.goodreads.com/author/show/21630637.Catherine_Matsalla"><i class="fa-brands fa-goodreads"></i></a>
             <a href="https://www.instagram.com/throughtheeyesofblue/ "><i class="fa-brands fa-instagram"></i></a>
             `;
      }
      else if (title === "Daniel Rodriquez") {
        socialMediaDiv.innerHTML = `
            
             <a href="https://www.facebook.com/people/World-Space-League/100063649852321/ "><i class="fa-brands fa-facebook"></i></a>
             <a href="https://twitter.com/rahbleza"><i class="fa-brands fa-twitter"></i></a>
             `;
      }
      else if (title === "Debbie Stevens") {
        socialMediaDiv.innerHTML = `
            
             <a href="https://debbiestevensauthor.wordpress.com/"><i class=" fa-solid fa-globe"></i></a>
             <a href="https://www.facebook.com/MyFamilyCookbookSeries "><i class="fa-brands fa-facebook"></i></a>
             <a href="https://www.instagram.com/ladyrd7297/"><i class="fa-brands fa-instagram"></i></a>
             <a href="https://www.pinterest.com/ladyrd7297/"><i class="fa-brands fa-pinterest"></i></a>
             `;
      }
      else if (title === "Don Segal") {
        socialMediaDiv.innerHTML = `
            
             <a href="https://donsegal.wordpress.com/"><i class=" fa-solid fa-globe"></i></a>`;
      }
      else if (title === "Joseph J Allen") {
        socialMediaDiv.innerHTML = `
            
             <a href="https://www.facebook.com/JosephJAllenAuthor "><i class="fa-brands fa-facebook"></i></a>`;
      }
      else if (title === "Judy Young") {
        socialMediaDiv.innerHTML = `
        <a href="https://www.simpleaccentreduction.com/"><i class="fa-solid fa-globe"></i></a>
        <a href=" https://www.facebook.com/SimpleAccentReduction/  "><i class="fa-brands  fa-facebook"></i></a>
        <a href=" https://www.linkedin.com/in/judy-young-25225b20/  "><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCHRm61AfuYCmf5nGUMDxtFw"><i class="fa-brands fa-youtube"></i></a>`;
      }
      else if (title === "Larry Ventresca") {
        socialMediaDiv.innerHTML = `
        <a href="https://www.vfggroupinc.com/"><i class="fa-solid fa-globe"></i></a>
               <a href=" https://www.linkedin.com/in/larry-ventresca-26aa3b47 "><i class="fa-brands fa-linkedin"></i></a>
               `;
        }
      else if (title === "Maka Sepashvali") {
        socialMediaDiv.innerHTML = `
        <a href="https://www.facebook.com/people/Maka-Sepashvili-Books/100063022401681/ "><i class="fa-brands fa-facebook"></i></a>
             <a href="https://www.instagram.com/maka_sepa/ "><i class="fa-brands fa-instagram"></i></a>
               `;
        }
        else if (title === "Michelle Murray") {
        socialMediaDiv.innerHTML = `
        <a href="https://mlmurraymurray.wixsite.com/mirandasdreams"><i class="fa-solid fa-globe"></i></a>
        <a href="https://www.facebook.com/Dreamwalkerseries  "><i class="fa-brands  fa-facebook"></i></a>
        <a href="https://www.instagram.com/mlmurray.murray/   "><i class="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/murray_mlmurray "><i class="fa-brands fa-twitter"></i></a>
       `;
        }
        else if (title === "Mirela Kanini") {
        socialMediaDiv.innerHTML = `
        <a href=" https://www.goodreads.com/author/show/22133537.Mirela_Kanini"><i class="fa-brands fa-goodreads"></i></a>
        <a href="https://www.facebook.com/people/Mirela-Kanini/100063517848233/"><i class="fa-brands  fa-facebook"></i></a>
        <a href="https://www.instagram.com/mirela_kanini/"><i class="fa-brands fa-instagram"></i></a>
       `;
        }
        else if (title === "Nadia Mau Bernardy") {
        socialMediaDiv.innerHTML = `
        <a href="https://nadiabernardy.com/"><i class="fa-solid fa-globe"></i></a>
        <a href="https://www.goodreads.com/author/show/40767364.Nadia_Mau_Bernardy "><i class="fa-brands fa-goodreads"></i></a>
        <a href="https://www.linkedin.com/in/nadia-bernardy/ "><i class="fa-brands  fa-linkedin"></i></a>
        <a href="https://www.instagram.com/nadiamaubernardy/ "><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.instagram.com/nadiamaubernardy/ "><i class="fa-brands fa-youtube"></i></a>
       `;
        }
        else if (title === "Stephen Juracka") {
        socialMediaDiv.innerHTML = `
        
        <a href="https://www.goodreads.com/author/show/22498859.Stephen_Juracka "><i class="fa-brands fa-goodreads"></i></a>
        <a href=" https://www.linkedin.com/in/steve-juracka-ed-d-57294743/"><i class="fa-brands  fa-linkedin"></i></a>
        <a href=" https://twitter.com/SjJuracka"><i class="fa-brands fa-twitter"></i></a>
       `;
        }
        else if (title === "Teresa Spangler") {
        socialMediaDiv.innerHTML = `
        
        <a href=" https://www.facebook.com/TeresaWSpangler"><i class="fa-brands fa-facebook"></i></a>
        <a href="  https://www.linkedin.com/in/teresawspangler/"><i class="fa-brands  fa-linkedin"></i></a>
       `;
        }
       
      
      

      detailsDiv.appendChild(socialMediaDiv);

      authorInfoDiv.appendChild(detailsDiv);

      // Add image to .book-img div based on author
      const bookImgDiv1 = document.querySelector(".book-img-1");
      const bookImgDiv2 = document.querySelector(".book-img-2");
      const bookImgDiv3 = document.querySelector(".book-img-3");
      if (title === "Alia Almoayed") {
        bookImgDiv1.innerHTML = `<a href="books_info.html?bookImage=/images/books/I want a healthy pregnancy.png">
        <img id="book-img" src="/images/books/I want a healthy pregnancy.png" alt="pregnancy book">
    </a><p class="book-name">Healthy Pregnancy Book</p>`;
      } else if (title === "Antoine D.Moss") {
        bookImgDiv1.innerHTML = `        <a href="/books_info.html?bookImage=/images/books/Learn to intern CEO style.png">
        <img id="book-img" src="/images/books/Learn to intern CEO style.png" alt="CEO book">
    </a>
    <div class="book-name">Learn to intern CEO style</div>`;
      } else if (title === "Alex Rodriguez") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Lapse.png">
        <img id="book-img" src="/images/books/Lapse.png" alt="Lapse">
    </a>
    <div class="book-name">Lapse</div>`;
      } else if (title === "Brandi Parsons") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Kidnapped Asylum.png">
        <img id="book-img" src="/images/books/Kidnapped Asylum.png" alt="Lapse">
    </a>
    <div class="book-name">Kidnapped Asylum</div>`;
      } else if (title === "Brant Vickers") {
        bookImgDiv1.innerHTML = `
                <a href="/books_info.html?bookImage=/images/books/The sift in the backlot.png">
        <img id="book-img" src="/images/books/The sift in the backlot.png" alt="Lapse">
    </a>
    <div class="book-name">The sift in the backlot</div>`;
      } else if (title === "Dr.Carolyn Scott") {
        bookImgDiv1.innerHTML = `
                <a href="/books_info.html?bookImage=/images/books/Enhanced Learning Abilities.png">
        <img id="book-img" src="/images/books/Enhanced Learning Abilities.png" alt="Lapse">
    </a>
    <div class="book-name">The sift in the backlot</div>`;
      } else if (title === "Kathryn Cervera") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Who Is It.png">
        <img id="book-img" src="/images/books/Who Is It.png" alt="Lapse">
    </a>
    <div class="book-name">The sift in the backlot</div>`;
      } else if (title === "Courtney Pahlke") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/( Life Force Preserve ) Anna and the Resurgent of the Precious Blood.png">
<img id="book-img" src="/images/books/( Life Force Preserve ) Anna and the Resurgent of the Precious Blood.png" alt="( Life Force Preserve ) Anna and the Resurgent of the Precious Blood">
</a>
<div class="book-name">Life Force Preserve : Anna and the Resurgent of the Precious Blood</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
                <a href="/books_info.html?bookImage=/images/books/( Life Force Preserve ) West End William.png">
<img id="book-img" src="/images/books/( Life Force Preserve ) West End William.png" alt="( Life Force Preserve ) West End William">
</a>
<div class="book-name">Life Force Preserve : West End William</div>`;
      } else if (title === "Curse Queen") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Little Black Book of Nasty Spells.png">
        <img id="book-img" src="/images/books/The Little Black Book of Nasty Spells.png" alt="Little Black Book">
    </a>
    <div class="book-name">The Little Black Book of Nasty Spells</div>`;
      } else if (title === "Deanna King") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Gracie's Stories.png">
        <img id="book-img" src="/images/books/Gracie's Stories.png" alt="Gracie's Stories">
    </a>
    <div class="book-name">Gracie's Stories</div>`;
      } else if (title === "Devaughn Lily") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Magnificent Life of Gravvy Brown.png">
         <img id="book-img" src="/images/books/The Magnificent Life of Gravvy Brown.png" alt="he Magnificent Life of Gravvy Brown">
     </a>
     <div class="book-name">The Magnificent Life of Gravvy Brown</div>`;
      } else if (title === "Gracelyn Keys") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Who's There Bear.png">
        <img id="book-img" src="/images/books/Who's There Bear.png" alt="Who's There Bear">
     </a>
     <div class="book-name">Who's There Bear</div>`;
      } else if (title === "Jason Ranieri") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Polka Dots and Politics.png">
         <img id="book-img" src="/images/books/Polka Dots and Politics.png" alt="Polka Dots and Politicsr">
     </a>
     <div class="book-name">Polka Dots and Politicsr</div>`;
      } else if (title === "Jay Payleitner") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Point Line Plane Eternity.png">
         <img id="book-img" src="/images/books/Point Line Plane Eternity.png" alt="Point Line Plane Eternity">
     </a>
     <div class="book-name">Point Line Plane Eternity</div>`;
      }
      // else if (title === "John Morgan Mullen") {
      //     bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/From Ruins To Rebuilding.png">
      //       <img id="book-img" src="/images/books/From Ruins To Rebuilding.png" alt="From Ruins To Rebuilding">
      //       </a>
      //       <div class="book-name">From Ruins To Rebuilding</div>`;
      //       // Additionally, show bookImgDiv2
      //       bookImgDiv2.style.display = "block";
      //       bookImgDiv2.innerHTML = `
            
      //       <a href="/books_info.html?bookImage=/images/books/God Of The Storm.png">
      //         <img id="book-img" src="/images/books/God Of The Storm.png" alt="God Of The Storm">
      //         </a>
      //         <div class="book-name">God Of The Storm</div>`;
      //       }
       else if (title ==="John Morgan Mullen") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Road Map To Tomorrow.png">
<img id="book-img" src="/images/books/Road Map To Tomorrow.png" alt="Road Map To Tomorrow">
</a>
<div class="book-name">Road Map To Tomorrow</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
                <a href="/books_info.html?bookImage=/images/books/Straight from the Heart.png">
<img id="book-img" src="/images/books/Straight from the Heart.png" alt="Straight from the Heart">
</a>
<div class="book-name">Straight from the Heart</div>`;
      } 
      else if (title === "Josef Tsau") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/One-Matter Nature Science.png">
         <img id="book-img" src="/images/books/One-Matter Nature Science.png" alt="One-Matter Nature Science">
     </a>
     <div class="book-name">One-Matter Nature Science</div>`;
      } else if (title === "Karen J Roberts") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Little Blue Dog.png">
<img id="book-img" src="/images/books/The Little Blue Dog.png" alt="The Little Blue Dog">
</a>
<div class="book-name">The Little Blue Dog</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
                <a href="/books_info.html?bookImage=/images/books/The Gentle Beagle.png">
<img id="book-img" src="/images/books/The Gentle Beagle.png" alt="The Gentle Beagle">
</a>
<div class="book-name">The Gentle Beagle</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv3.style.display = "block";
        bookImgDiv3.innerHTML = `
                
                <a href="/books_info.html?bookImage=/images/books/Terriers Tale Cover.jpg">
<img id="book-img" src="/images/books/Terriers Tale Cover.jpg" alt="Terriers Tale Cover">
</a>
<div class="book-name">Terriers Tale Cover</div>`;
      } else if (title === "Kathy Bornino") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/A Labyrinth Of LifeTimes.png">
         <img id="book-img" src="/images/books/A Labyrinth Of LifeTimes.png" alt="A Labyrinth Of LifeTimes">
     </a>
     <div class="book-name">A Labyrinth Of LifeTimes</div>`;
      } else if (title === "Leonard H. Roberts") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Leading With Vision and Heart.png">
         <img id="book-img" src="/images/books/Leading With Vision and Heart.png" alt="Leading With Vision and Heart">
     </a>
     <div class="book-name">Leading With Vision and Heart</div>`;
      } else if (title === "Louis Garbis") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/H Zoh Mae (Our Life).png">
         <img id="book-img" src="/images/books/H Zoh Mae (Our Life).png" alt="H Zoh Mae (Our Life)">
     </a>
     <div class="book-name">H Zoh Mae (Our Life)</div>`;
      } else if (title === "Lynda Vialet") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Redemption A Journey from Tragedy to Triumph.png">
         <img id="book-img" src="/images/books/Redemption A Journey from Tragedy to Triumph.png" alt="Redemption A Journey from Tragedy to Triumph">
     </a>
     <div class="book-name">Redemption: A Journey from Tragedy to Triumph</div>`;
      } else if (title === "Marc Casciani") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Craft Your Calling.png">
         <img id="book-img" src="/images/books/Craft Your Calling.png" alt="Craft Your Calling">
     </a>
     <div class="book-name">Craft Your Calling</div>`;
      } else if (title === "Dr Meena Chintapalli") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Raising a Healthy Child.png">
         <img id="book-img" src="/images/books/Raising a Healthy Child.png" alt="Raising a Healthy Child">
     </a>
     <div class="book-name">Raising a Healthy Child</div>`;
      } else if (title === "Emerich Roth") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Witnessing and Surviving The Holocaust.png">
         <img id="book-img" src="/images/books/Witnessing and Surviving The Holocaust.png" alt="Witnessing and Surviving The Holocaust">
     </a>
     <div class="book-name">Witnessing & Surviving The Holocaust</div>`;
      } else if (title === "J.Price") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Ancient Sauk.png">
<img id="book-img" src="/images/books/Ancient Sauk.png" alt="Ancient Sauk">
</a>
<div class="book-name">Ancient Sauk...</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
        <a href="/books_info.html?bookImage=/images/books/River Rock Motorcycle Girl.png">
<img id="book-img" src="/images/books/River Rock Motorcycle Girl.png" alt="River Rock Motorcycle Girl">
</a>
<div class="book-name">River Rock Motorcycle Girl</div>`;
        // Additionally, show bookImgDiv3
        bookImgDiv3.style.display = "block";
        bookImgDiv3.innerHTML = `
                
          
<a href="/books_info.html?bookImage=/images/books/Rock Lake's Stellar Pyramids.png">
<img id="book-img" src="/images/books/Rock Lake's Stellar Pyramids.png" alt="Rock Lake's Stellar Pyramids">
</a>
<div class="book-name">Rock Lake's Stellar Pyramids</div>`;
      }
      else if (title === "Brandon Iwan") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Testament in black.png">
         <img id="book-img" src="/images/books/Testament in black.png" alt="Testament in black">
     </a>
     <div class="book-name">Testament in black</div>`;
      }
      else if (title === "Allen Lowe") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Turn Me Loose White Man.png">
         <img id="book-img" src="/images/books/Turn Me Loose White Man.png" alt="Turn Me Loose White Man">
     </a>
     <div class="book-name">Turn Me Loose White Man</div>`;
      }
      else if (title === "Male Author") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Turn Me Loose White Man.png">
         <img id="book-img" src="/images/books/Turn Me Loose White Man.png" alt="Turn Me Loose White Man">
     </a>
     <div class="book-name">Turn Me Loose White Man</div>`;
      }
      else if (title === "Bob Marks") {
        bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Rhymes and Reasons.png">
          <img id="book-img" src="/images/books/Rhymes and Reasons.png" alt="Rhymes and Reasons">
          </a>
          <div class="book-name">Rhymes and Reasons</div>`;
        }
        else if (title === "Dr. Burliss Parker") {
          bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/From Ruins To Rebuilding.png">
            <img id="book-img" src="/images/books/From Ruins To Rebuilding.png" alt="From Ruins To Rebuilding">
            </a>
            <div class="book-name">From Ruins To Rebuilding</div>`;
            // Additionally, show bookImgDiv2
            bookImgDiv2.style.display = "block";
            bookImgDiv2.innerHTML = `
            
            <a href="/books_info.html?bookImage=/images/books/God Of The Storm.png">
              <img id="book-img" src="/images/books/God Of The Storm.png" alt="God Of The Storm">
              </a>
              <div class="book-name">God Of The Storm</div>`;
            }
            
            else if (title === "C.A. Reagan") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Timekeepers.png">
               <img id="book-img" src="/images/books/Timekeepers.png" alt="Timekeepers">
           </a>
           <div class="book-name">Timekeepers</div>`;
            }
            else if (title === "Catherine Matsalla") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Through The Eyes Of Blue.png">
               <img id="book-img" src="/images/books/Through The Eyes Of Blue.png" alt="Through The Eyes Of Blue">
           </a>
           <div class="book-name">Through The Eyes Of Blue</div>`;
            }
            else if (title === "Charring Cross") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Primeblades.png">
               <img id="book-img" src="/images/books/Primeblades.png" alt="Primeblades">
           </a>
           <div class="book-name">Primeblades</div>`;
            }
            else if (title === "Daniel Rodriquez") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/World Space League Presents.png">
               <img id="book-img" src="/images/books/World Space League Presents.png" alt="World Space League Presents">
           </a>
           <div class="book-name">World Space League Presents</div>`;
            }
            else if (title === "Deb Huntley") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Meditation Education.png">
               <img id="book-img" src="/images/books/Meditation Education.png" alt="Meditation Education">
           </a>
           <div class="book-name">Meditation Education</div>`;
            }
            else if (title === "Debbie Stevens") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/My Family Cookbook Mothers Against Hunger.png">
               <img id="book-img" src="/images/books/My Family Cookbook Mothers Against Hunger.png" alt="My Family Cookbook Mothers Against Hunger">
           </a>
           <div class="book-name">My Family Cookbook Mothers Against Hunger</div>`;
            }
            else if (title === "Don Segal") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Coming of a Cluttered Day.png">
               <img id="book-img" src="/images/books/The Coming of a Cluttered Day.png" alt="The Coming of a Cluttered Day">
           </a>
           <div class="book-name">The Coming of a Cluttered Day</div>`;
            }
            else if (title === "Jack McNaughton") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Creating A Profitable Business.png">
               <img id="book-img" src="/images/books/Creating A Profitable Business.png" alt="Creating A Profitable Business">
           </a>
           <div class="book-name">Creating A Profitable Business</div>`;
            }
            else if (title === "Jake Townsend") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Romantic Tales from Missouri.png">
               <img id="book-img" src="/images/books/Romantic Tales from Missouri.png" alt="Romantic Tales from Missouri">
           </a>
           <div class="book-name">Romantic Tales from Missouri</div>`;
            }
            else if (title === "Jason Dankert") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Memoirs of a Straight Male Hairstylist.png">
               <img id="book-img" src="/images/books/Memoirs of a Straight Male Hairstylist.png" alt="Memoirs of a Straight Male Hairstylist">
           </a>
           <div class="book-name">Memoirs of a Straight Male Hairstylist</div>`;
            }
            else if (title === "Joseph J Allen") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Behind the Scenes.png">
               <img id="book-img" src="/images/books/Behind the Scenes.png" alt="Behind the Scenes">
           </a>
           <div class="book-name">Behind the Scenes</div>`;
            }
            else if (title === "Judy Young") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Simple Accent Reduction.png">
               <img id="book-img" src="/images/books/Simple Accent Reduction.png" alt="Simple Accent Reduction">
           </a>
           <div class="book-name">Simple Accent Reduction</div>`;
            }
            else if (title === "Kathy Stacey") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/My Sister the Werewolf.png">
               <img id="book-img" src="/images/books/My Sister the Werewolf.png" alt="My Sister the Werewolf">
           </a>
           <div class="book-name">My Sister the Werewolf</div>`;
            }
            else if (title === "Larry Ventresca") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Call Up Put Down.png">
               <img id="book-img" src="/images/books/Call Up Put Down.png" alt="Call Up Put Down">
           </a>
           <div class="book-name">Call Up Put Down</div>`;
            }
           else if (title === "M.K. Hoffman") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Rant.png">
               <img id="book-img" src="/images/books/Rant.png" alt="Rant">
           </a>
           <div class="book-name">Rant</div>`;
            } 
            else if (title === "Maka Sepashvali") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Where is the Letter from My Friend.png">
<img id="book-img" src="/images/books/Where is the Letter from My Friend.png" alt="Where is the Letter from My Friend">
</a>
<div class="book-name">Where is the Letter from My Friend</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
        <a href="/books_info.html?bookImage=/images/books/Main Colors Fairy Tales.png">
<img id="book-img" src="/images/books/Main Colors Fairy Tales.png" alt="Main Colors Fairy Tales">
</a>
<div class="book-name">Main Colors Fairy Tales</div>`;
            }

            else if (title === "Marcus Armantrout") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Void of the Cosmos.png">
               <img id="book-img" src="/images/books/Void of the Cosmos.png" alt="Void of the Cosmos">
           </a>
           <div class="book-name">Void of the Cosmos</div>`;
            }
          
            else if (title === "Margaret Podmore Emery") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Faces and Lies.png">
               <img id="book-img" src="/images/books/Faces and Lies.png" alt="Faces and Lies">
           </a>
           <div class="book-name">Faces and Lies</div>`;
            }
            else if (title === "Mark D. Estes") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Do Better Be Better.png">
               <img id="book-img" src="/images/books/Do Better Be Better.png" alt="Do Better Be Better">
           </a>
           <div class="book-name">Do Better Be Better</div>`;
            }
            else if (title === "Mark Reasoner") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Body in the Tower.png">
<img id="book-img" src="/images/books/Body in the Tower.png" alt="Body in the Tower">
</a>
<div class="book-name">Body in the Tower</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
        <a href="/books_info.html?bookImage=/images/books/Body in the Lake.png">
<img id="book-img" src="/images/books/Body in the Lake.png" alt="Body in the Lake">
</a>
<div class="book-name">Body in the Lake</div>`;
}

else if (title === "Michelle Murray") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Dream Walker.png">
 <img id="book-img" src="/images/books/The Dream Walker.png" alt="The Dream Walker">
</a>
<div class="book-name">The Dream Walker</div>`;
}
else if (title ==="Mirela Kanini") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Sins of Mrs.Ema.png">
 <img id="book-img" src="/images/books/The Sins of Mrs.Ema.png" alt="The Sins of Mrs.Ema">
</a>
<div class="book-name">The Sins of Mrs.Ema</div>`;
}
else if (title ==="Nadia Mau Bernardy") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/But First Dream Bigger.png">
 <img id="book-img" src="/images/books/But First Dream Bigger.png" alt="But First Dream Bigger">
</a>
<div class="book-name">But First Dream Bigger</div>`;
}
else if (title ==="Rose Hale") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Adventures in Seeking Knowledge.png">
 <img id="book-img" src="/images/books/Adventures in Seeking Knowledge.png" alt="Adventures in Seeking Knowledge">
</a>
<div class="book-name">Adventures in Seeking Knowledge</div>`;
}
else if (title ==="Stephen Juracka") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Lead with Love.png">
 <img id="book-img" src="/images/books/Lead with Love.png" alt="Lead with Love">
</a>
<div class="book-name">Lead with Love</div>`;
}
else if (title ==="Sweet Sue Kouchis") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/Get In The Sales Game.png">
 <img id="book-img" src="/images/books/Get In The Sales Game.png" alt="Get In The Sales Game">
</a>
<div class="book-name">Get In The Sales Game</div>`;
}
else if (title ==="Teresa Spangler") {
bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/All That I Am Now That I Know.png">
 <img id="book-img" src="/images/books/All That I Am Now That I Know.png" alt="All That I Am Now That I Know">
</a>
<div class="book-name">All That I Am Now That I Know</div>`;
}
else if (title === "William Mierzejewski") {
              bookImgDiv1.innerHTML = `<a href="/books_info.html?bookImage=/images/books/The Local Legend of Iron River.png">
<img id="book-img" src="/images/books/The Local Legend of Iron River.png" alt="The Local Legend of Iron River">
</a>
<div class="book-name">The Local Legend of Iron River</div>`;
        // Additionally, show bookImgDiv2
        bookImgDiv2.style.display = "block";
        bookImgDiv2.innerHTML = `
                
        <a href="/books_info.html?bookImage=/images/books/The Echoes of The Elk's Estate.png">
<img id="book-img" src="/images/books/The Echoes of The Elk's Estate.png" alt="The Echoes of The Elk's Estate">
</a>
<div class="book-name">The Echoes of The Elk's Estate</div>`;
}
          }
  });

 // _______________________________________________________________________________________________
// ---------------------- * All books informations *------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookImage = urlParams.get('bookImage');

    // Add the book image to the .author-book-img div with id "book-img"
    const authorBookImgDiv = document.getElementById("author-book-img");
    authorBookImgDiv.innerHTML = `<img id="book-img" src="${bookImage}" alt="Book Image">`;

    // Extract the name of the book from the bookImage URL
    const bookName = bookImage.split('/').pop().split('.')[0].replace(/-/g, ' ');

    // Set the book name as the text content of the .book-name element
    const bookNameElement = document.querySelector('.book-name');
    bookNameElement.textContent = bookName;

    // Call function to populate description and buttons based on the book image
    populateDescriptionAndButtons(bookImage);

    // Function to populate description and buttons based on the book image clicked
    function populateDescriptionAndButtons(imageSrc) {
        // Find the books-discription div and buttons div
        const descriptionContainer = document.querySelector(".books-discription");
        const buttonsContainer = document.querySelector(".buttons");

        // Define button labels and links and description based on the book type
        let buttonInfo;
        let description;
        if (imageSrc.includes('I want a healthy pregnancy')) {
            buttonInfo = [
                { label: "Apple", link: "https://books.apple.com/us/book/i-want-a-healthy-pregnancy/id520114438" ,target:"_blank" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/i-want-a-healthy-pregnancy" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Alia_Almoayed_I_Want_a_Healthy_Pregnancy?id=udHDAgAAQBAJ" }
            ];



            description = "Is pregnancy different for a nutritionist? Does pregnancy get easier when you’re eating well? Does nutrition really make a difference for mother and baby during this important stage?" +
"<p class='mt-2'>Find out how to have a healthy and vibrant pregnancy the natural way! I Want a Healthy Pregnancy is a must for every mother-to-be who wants a natural, comfortable and stress-free pregnancy.</p>" +
"<p class='mt-2'>In a light and simple manner, Nutritional Therapist Alia Almoayed explores her own pregnancy journals to help you find simple and natural approaches to conception, pregnancy and delivery.</p>" +
"<p class='mt-2'>Discover how an optimum diet and lifestyle can enhance your pregnancy experience and give you amazing results – a healthy pregnancy, a vibrant mummy and a super baby!</p>" +
"<p class='mt-2'>Learn How to maximise your nutrient intake; How to address nausea, fatigue and digestive issues; How to deal with cravings, appetite and weight; How to use natural remedies for common pregnancy symptoms; How to handle pregnancy’s emotional rollercoaster; How to boost your immune defences; How to optimise pregnancy during travel, work and fasting; How to plan a healthy menu and exercise routine; How to have a happy, natural and drug-free delivery ... and much more.</p>" +
"<p class='mt-2'>Packed full of first-hand, tried and tested advice that really works, I Want a Healthy Pregnancy will be your best friend throughout your amazing journey to motherhood.</p>";

            // description = "Is pregnancy different for a nutritionist? Does pregnancy get easier when you’re eating well? Doesnutrition really make a difference for mother and baby during this important stage?<p class='mt-2'>Find the time marker, never reveal the secrets of the universe, don't get involved in the time marker's lives.</p> <p class='mt-2'>Find out how to have a healthy and vibrant pregnancy the natural way!</p> <p class='mt-2'>I Want a Healthy Pregnancy is a must for every mother-to-be who wants a natural, comfortable and stress-free pregnancy.</p> In a light and simple manner, Nutritional Therapist Alia Almoayed explores her own pregnancy journals to help you find simple and natural approaches to conception, pregnancy and delivery.";
        } else if (imageSrc.includes('Learn to intern CEO style')) {
            buttonInfo = [
                { label: "Apple", link: " https://books.apple.com/us/book/learn-to-intern-ceo-style/id553189273 " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/learn-to-intern-ceo-style-71-leadership-principles-that-got-me-and-now-you-money-a-free-graduate-degree-and-respect" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Antoine_D_Moss_Learn_to_Intern_CEO_Style_71_Leader?id=LH5lOVmyyeIC" },
            ];
            description = "Learn to Intern CEO Style shows you how to develop and shape your CEO skills and attitude through internships, written by a student currently completing his eighth world-class internship. Antoine Moss developed the <span class='fw-bold'> Creator of Excellent Opportunities </span> (CEO) internship style framework from his fascinating, once-in-a-life time experiences. He has interned on Capitol Hill, with the FBI, and NASA. Moss co-interned with celebrities and played an integral role in solving a federal law enforcement case. This book will help students and young professionals stand out in today’s overcrowded job market so they can land the job of their dreams!  <p class='mt-2 fs-5 fw-medium'>Praise and Editorial Reviews</p> <p class='mt-2'> Learn to Intern CEO Style is an essential guide for enterprising students trying to break into a career at all levels of government and business organizations. This book is a genuine and honest look at what to do, and more importantly, what not to do in the world of internships. What Moss has created is a handy book with a mix of authentic stories about being in the trenches coupled with practical <span class='fw-bold'> how-to advice. An invaluable addition to your personal library! <p class='mt-2'> Mayor Luke Ravenstahl, City of Pittsburgh Mayor Ravenstahl, 29-years-old, youngest mayor of any major U.S. city</p>";
        }
         else if (imageSrc.includes('Lapse')) {
            buttonInfo = [
            { label: "Amazon", link: "https://www.amazon.com/Lapse-Alex-Rodriguez/dp/1545754586" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/lapse/id1584962763?ls=1" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/lapse-alex-rodriguez/1140142978?ean=9781545754580" },
                { label: "Books-a-Million", link: "https://www.booksamillion.com/p/Lapse/Alex-Rodriguez/9781545754580?id=9055814517187 " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/lapse " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/lapse-2 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Alex_Rodriguez_Lapse?id=tNBBEAAAQBAJ" }
            ];
            description = "Nora knows the rules.<p class='mt-2'>Find the time marker, never reveal the secrets of the universe, don't get involved in the time marker's lives.</p> <p class='mt-2'>However, in nearly every single life cycle, they're paired together, when it comes to Mason, she breaks all the rules again and again </p> <p class='mt-2'> She found him when he was twelve. In high school, Nora taught him his place in the universe. And their lives were thoroughly intertwined-now more than ever.</p> <p class='mt-2'>Despite her mistakes, Nora's job was easy enough, until everything took a sharp turn. Mason is angry with her, with the universe telling her who she ought to be. Nora knows her role, and what that responsibility means. She isn't about to start questioning why things are the way they are, though in her heart her efforts are beginning to unfurl a fog over her judgment. To add to their cosmic dysfunction, Mason and Nora are only one time warp away from being discovered by time travelers, who would like nothing more than to see Mason restart a life cycle, or thrown out of time completely.</p> <p class='mt-2'> <span class='fs-5 fw-medium '>Editorial Reviews</span></p> <p class='mt-2'>Rodriguez has an excellent storytelling style with good pacing and panache for some rough and ready action scenes. There s a lot for sci-fi and Alternate Universe fantasy fans to enjoy here, and part two is sure to be a whopper. <span class='fw-bold fst-italic'> — ManyBooks</span></p>";
       }else if (imageSrc.includes('Kidnapped Asylum')) {
            buttonInfo = [
                { label: "Amazon", link: "https://www.amazon.com/Kidnapped-Asylum-Book-Seekers-ebook/dp/B07QMGCNG2" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/kidnapped-asylum/id1462891633" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/kidnapped-asylum" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Brandi_Parsons_Kidnapped_Asylum?id=b7SWDwAAQBAJ" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/kidnapped-asylum" }
            ];
            description = "Political activist, Christel Kisongo, worked for the Paix Programme in the Democratic Republic of il the disappearance of his UN colleagues, Caleb and Sara. Promoting peaceful resolution to conflict was his life's calling — until he had to flee his country, with nothing but his backpack. Once catapulted into the quest for asylum in the United States, will he be crushed in the immigration process, or will he survive the tumultuous political landscape?";
        }
       else if (imageSrc.includes('The sift in the backlot')) {
            buttonInfo = [
                // { label: "Amazon", link: "" },
                // { label: "Apple Books", link: "" },
                // { label: "eBooks2go", link: "" },
                // { label: "Google Play", link: "" },
                // { label: "Kobo", link: "" }
            ];
            description = "On a July night in Culver City, California in 1969, Paul and Kyle sneak into one of MGM's Back Lots. As they explore the astonishing dilapidated old sets, they encounter actors long dead and at Tara on the long forgotten Gone With the Wind set, meet Scarlett (Vivian Leigh) and Ashley (Leslie Howard). The novel interweaves adventure, magical realism, and important life situations that tests their friendship and eventually means the difference between life and death.";
        }
       else if (imageSrc.includes('Enhanced Learning Abilities')) {
            buttonInfo = [
                { label: "Amazon", link: "https://www.amazon.com/Enhancing-Learning-Abilities-Increase-Possibilities/dp/1545744785" },
                { label: "Apple Books", link: "https://www.barnesandnoble.com/w/enhancing-learning-abilities-carolyn-scott/1132231865?ean=9781545744789" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/enhancing-learning-abilities " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Dr_Carolyn_Scott_Enhancing_Learning_Abilities_Incr?id=tVafDwAAQBAJ " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/enhancing-learning-abilities-increase-your-child-s-possibilities-at-the-kitchen-table" }
            ];
            description = "Games and activities that help children with a learning disability strengthen their processing deficits such as memory, auditory processing, processing speed, visual processing, logic and executive functioning.";
        }
       else if (imageSrc.includes('Who Is It')) {
            buttonInfo = [
                { label: "Amazon", link: "https://www.amazon.com/Who-Kathryn-Cervera/dp/1545747717" },
                { label: "Apple Books", link: " https://books.apple.com/us/book/who-is-it/id1481808467?ign-gact=1 " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/who-is-it" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/who-is-it-kathryn-cervera/1133749896?ean=9781545747711  " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Kathryn_Cervera_Who_Is_It?id=WMGyDwAAQBAJ " },
                { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/who-is-it-5" }
            ];
            description = "Fourteen-year-old John Dolton seems to have it all. The tall, handsome captain of the Rorertown High School basketball team has killer looks, a three-point shot, and now his dream girl—Lisa. But one night changes everything.<p class='mt-2'>Filled with romance and teen humor, Kathryn Cervera’s young adult social issues novel is a fascinating read for high school students everywhere and will resonate with any teen parent.</P>";
        }
        else if (imageSrc.includes('( Life Force Preserve ) West End William')) {
            buttonInfo = [
                { label: "Amazon", link: "https://www.amazon.com/Life-Force-Preserve-Book-William-ebook/dp/B09KMMSHZ5?ref_=ast_author_dp " },
                { label: "Apple Books", link: "https://books.apple.com/us/book/life-force-preserve-book-2-west-end-william/id1592633630 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/life-force-preserve-book-2-courtney-leigh-pahlke/1140392561?ean=9781545754429 " },
                { label: "eBooks2go", link: "https://www.barnesandnoble.com/w/life-force-preserve-book-2-courtney-leigh-pahlke/1140392561?ean=9781545754429 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/who-is-it-kathryn-cervera/1133749896?ean=9781545747711  " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Courtney_Leigh_Pahlke_Life_Force_Preserve_Book_2_W?id=Ud1KEAAAQBAJ" },
                { label: "Kobo", link: "  https://www.kobo.com/us/en/ebook/life-force-preserve-book-2-west-end-william " }
            ];
            description = "William Norwick's life collapses after witnessing a traumatic fatality the Scottish Police concluded was an accident. Troubled by the verdict, William suppresses his memory with substance abuse and destructive behavior as his version included red-eyed, shadowy figures which continue to stalk him since the catastrophe.<p class='mt-2'>When a night of excessive drinking results in public humiliation requiring police attendance to interfere with a covert operation, William faces a sobering reality. He's at the center of a mystery that defies medical science and his next course of action may affect the entire human race.</P><p class='mt-2 fs-5 fw-medium'>Editorial Reviews </P><p class='mt-2'>There's much to like about West End William, and the novel rewards readers with an exciting and satisfying conclusion.<span class='fw-bold fst-italic'> — IndieReader</span></P>";
        }
        else if (imageSrc.includes('( Life Force Preserve ) Anna and the Resurgent of the Precious Blood')) {
            buttonInfo = [
                { label: "Amazon", link: " https://www.amazon.com/Life-Force-Preserve-Book-Resurgent/dp/1545744130 " },
                { label: "Apple Books", link: "https://books.apple.com/us/book/life-force-preserve-book-1-anna-and-the/id1462892079" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/life-force-preserve-book-1-courtney-leigh-pahlke/1131518283?ean=9781545744130 " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/life-force-preserve-book-1-anna-and-the-resurgent-of-the-precious-blood" }
             
            ];
            description = "Anna confronts the mysterious people blending into events following several near-death incidents, only to learn they’re a part of a worldwide organization that’s been covertly safeguarding her endangered bloodline against another invading presence" +
            "<p class='mt-2 fs-5 fw-medium'>Editorial Reviews</p>"+
            "<p class='mt-2'>Author Courtney Leigh Pahlke's Life Force Preserve is an eerily suspenseful book that will keep readers guessing with every turn of the page. Recommended for home and school libraries, this book has earned the Literary Classics Seal of Approval.<span class='fw-bold fst-italic'> —  Literary Classics International Book Awards</span></p>" +
"<p class='mt-2 '>Life Force Preserve is a gripping story that is best experienced by going in with as little foreknowledge as possible...The grittiness and tension draw readers in and keep them engaged right to the end. <span class='fw-bold fst-italic'>— ManyBooks</span></p>"+"<p class='mt-2 fs-5 fw-medium'>Awards & Accolades <i class='fa-solid fa-award  fs-5'></i></p>"+
"<p class='mt-2 fw-medium p-0 m-0'>2019 CLC International Mystery Book of the Year </p>"+"<p class='mt-1 fw-medium p-0 m-0'>2019 Chanticleer Global Thriller Award Finalist</p>" ;
        }
        else if (imageSrc.includes('The Little Black Book of Nasty Spells')) {
            buttonInfo = [
                { label: "Apple Books", link: "https://books.apple.com/us/book/the-little-black-book-of-nasty-spells/id1455205941 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Curse_Queen_The_Little_Black_Book_of_Nasty_Spells?id=FpeLDwAAQBAJ  " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/the-little-black-book-of-nasty-spells" }
             
            ];
            description = "In a world practically drowning in 'Love and Light' witches, it's hard to find a book of useful spells, that can get the job done. If you've ever been annoyed on social media by people and groups who want to push their own personal morals and beliefs as 'laws' on the whole of Paganism and Witchcraft, this is the book for you. This is a no-holds-barred, karma-free, Law of the Jungle look, into casting spells for revenge, protection, love, and more!" }
        else if (imageSrc.includes('The Magnificent Life of Gravvy Brown')) {
            buttonInfo = [
              
                { label: "Apple Books", link: " https://books.apple.com/us/book/the-magnificent-life-of-gravvy-brown/id522654924 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/DeVaughn_M_Lilly_The_Magnificent_Life_of_Gravvy_Br?id=LorDAgAAQBAJ  " },
                { label: "eBooks2go", link: "#" },
              
             
            ];
            description = "The Magnificent Life of Gravvy Brown is the life story of a young woman from New Orleans Louisiana and her meteoric rise from the harsh streets of the bayou to the bright lights of Hollywood. On the eve of his execution for the brutal murder of his mother, Gravvy sits down with a journalist and eloquently tells the story of what really happened in their tortured yet ‘Magnificent’ life. This is a tale that the Louisiana and American Justice systems wanted too forget about. "   }
            else if (imageSrc.includes("Gracie's Stories")) {
            buttonInfo = [
                { label: "Amazon", link: "https://books.apple.com/us/book/id1451472436" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1451472436" },
                { label: "Google Play", link: "https://books.apple.com/us/book/id1451472436" },
                { label: "eBooks2go", link: "https://books.apple.com/us/book/id1451472436" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/gracie-s-stories" }
            ];
            description = "Gracie is a precocious six-year-old little girl who loves her mommy and daddy, her friends, and has a fun life. Her Mommy and Daddy have a very big secret, but they have not told her yet! How will Gracie handling finding out that her parents adopted her? Follow Gracie thru six more stories to see how she handles moving, new friends-new school, and a new brother. See life thru the eyes of a precocious six-year-old girl named Gracie. She how she deals with adoption; moving, new friends and new school; and the biggest change ever, getting a new brother!"   }
        
            else if (imageSrc.includes("Who's There Bear")) {
            buttonInfo = [
                
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1477034278" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Gracelyn_Keys_Knock_Knock_Who_s_There_Bear_A_Story?id=-vKpDwAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/knock-knock-whos-there-bear" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/knock-knock-who-s-there-bear-a-story-about-embracing-bipolar-disorder" }
             
            ];
            description = "Knock, Knock, Who's There, Bear? A Story About Embracing Bipolar Disorder helps children understand various bipolar disorder symptoms and what to do about them. The story setting is a playground with Bear as the main character. It describes Bear's brain, symptoms, friendship and just being special for who you are."   }
        
            else if (imageSrc.includes("Polka Dots and Politics")) {
            buttonInfo = [
                // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1462891172 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Jason_Ranieri_Polka_Dots_and_Politics?id=abSWDwAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/polka-dots-and-politics-jason-ranieri/1131518507?ean=2940161325056" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/polka-dots-and-politics" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/polka-dots-and-politics " }
             
            ];
            description = "'The cast of characters seemed infinite in variety. Figures of monumental stature, ordinary men and women, heroes, villains, lovers and warriors, idealist, cultural icons, leaders of industry, family and friends,' all appear in this looking glass of small-town politics and it's enthusiastic glam. The tale is one of rapture and regret, flashes of guilty pleasure and tearful refrain, proud achievement and embarrassing blunders. Then again, when all my strutting and fretting is done, my book amounts to a fun, humorous political satire. I will settle for your enjoyment of my work as one of my desires."+
            "<p class='mt-2 fs-5 fw-medium'>Awards & Accolades <i class='fa-solid fa-award  fs-5'></i></p>"+
            "<p class='mt-2'>2019 American Fiction Awards Finalist for Political Thriller of the Years</p>"+"<p class='mt-2'>2019 American Fiction Awards Finalist for Comedy/Humor Book of the Year</p>"   }
        
        
            else if (imageSrc.includes("Point Line Plane Eternity")) {
            buttonInfo = [
                
                { label: "Apple Books", link: "https://books.apple.com/us/book/point-line-plane-eternity-the-journey-from-alone-to/id1500127686  " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Jay_Payleitner_Point_Line_Plane_Eternity_The_journ?id=OhXSDwAAQBAJ " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/point-line-plane-eternity " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/point-line-plane-eternity-the-journey-from-alone-to-finally-home  " }
             
            ];
            description = "'Once there was as boy who lived on a point...'' Thus begins a modern allegory that challenges our typical self-centered existence. Indeed, some people live on a point. It’s all about them. Some live on a line. They may actually care about the people they meet, but they never really leave their comfort zone. Most people live on a plane."+
           
            "<p class='mt-2'>They do their best in a flat, two-dimensional world, but deny what they know in their heart: “There’s more to this life than this life.” Point/Line/Plane/Eternity empowers readers to live with joy and purpose — still part of the finite world — while anticipating your forever home in heaven. In one sitting, you’ll finally understand what it means to be living on the threshold of eternity.</p>"  }
        
            else if (imageSrc.includes("Road Map To Tomorrow")) {
            buttonInfo = [
                
            // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "http://books.apple.com/us/book/id1447076778" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/John_Morgan_Mullen_Road_Map_to_Tomorrow_It_s_Easie?id=rhV_DwAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/road-map-to-tomorrow-its-easier-to-get-there-if-you-know-where-youre-going" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/road-map-to-tomorrow-it-s-easier-to-get-there-if-you-know-where-you-re-going" }
          
            ];
            description = "<span class='fw-bold'>Change how a person thinks, and you will change how they feel. Change how they feel, and you will change how they perform. Change how they perform and you will change the results. Change the results and you will change their lives.</span> This quote from R.W. Ross perfectly exemplifies my vision and dreams for Road Map to Tomorrow."+
           
            "<p class='mt-2'><span class='fw-bold fst-italic'>Road Map to Tomorrow</span> was inspired by the responsibility of my generation to transfer the knowledge of the past while laying the foundation for the technology of the future. The generational shift together with our exploding technology and gentrification of our world and everything in it. You will either be prepared or you won't. You will either adapt or you will professionally die. This book creatively provides a technology road map that takes you into the future with contributions from over 100 scientific experts providing you with insights into the future. Their studies and opinions touch on everything from computers to robots, medical science to nanotechnology, transportation to education, employment to politics, and entrepreneurial opportunities to love.</p>"  +
            "<p class='mt-2'>Our new world is exciting! It presents an abundance of opportunities the likes of which we have never seen. Change can cause both devastation and opportunity and those that prepare, learn to react, and position themselves professionally will be light years ahead on their journey to success. This book is your personal <span class='fw-bold fst-italic'>Road Map to Tomorrow</span> </p>"  }
        
            else if (imageSrc.includes("Straight from the Heart")) {
            buttonInfo = [
                
            // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "http://books.apple.com/us/book/id6443919162" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Practical_Christianity_Foundation_Revelation_Tribu?id=eBGIEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/revelation-tribulation-and-triumph" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/revelation-tribulation-and-triumph-1" }
          
            ];
            description = "<span class='fw-bold'>Change how a person thinks, and you will change how they feel. Change how they feel, and you will change how they perform. Change how they perform and you will change the results. Change the results and you will change their lives.</span> This quote from R.W. Ross perfectly exemplifies my vision and dreams for Road Map to Tomorrow."+
           
            "<p class='mt-2'><span class='fw-bold fst-italic'>Road Map to Tomorrow</span> was inspired by the responsibility of my generation to transfer the knowledge of the past while laying the foundation for the technology of the future. The generational shift together with our exploding technology and gentrification of our world and everything in it. You will either be prepared or you won't. You will either adapt or you will professionally die. This book creatively provides a technology road map that takes you into the future with contributions from over 100 scientific experts providing you with insights into the future. Their studies and opinions touch on everything from computers to robots, medical science to nanotechnology, transportation to education, employment to politics, and entrepreneurial opportunities to love.</p>"  +
            "<p class='mt-2'>Our new world is exciting! It presents an abundance of opportunities the likes of which we have never seen. Change can cause both devastation and opportunity and those that prepare, learn to react, and position themselves professionally will be light years ahead on their journey to success. This book is your personal <span class='fw-bold fst-italic'>Road Map to Tomorrow</span> </p>"  }
        





            else if (imageSrc.includes("One-Matter Nature Science")) {
            buttonInfo = [
                
            { label: "Amazon", link: "https://www.amazon.com/gp/product/1545755604" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/one-matter-nature-science-tsaus-scientific-revolution/id6443373586" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Josef_Tsau_One_Matter_Nature_Science_Tsau_s_Scient?id=dBGIEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/one-matter-nature-science" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/one-matter-nature-science-josef-tsau/1142082411" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/one-matter-nature-science-tsau-s-scientific-revolution" }
          
            ];
            description = "The (nature) science discovered by Copernicus and Galileo during the 16th and 17th centuries has a definition to obey of using a specific scientific method, experimental method, to make scientific discoveries leading to the development of today's mechanical physics. Yet, the centuries-long scientific misconceptions have misled the scientific community to develop the theories of modern physics disobeying the definition of science, which has to be wrong scientifically but has become today's mainstream-of-thought science. A scientific revolution is needed to introduce Tsau's breakthrough scientific discovery and to remove modern physics from science."}
           
            else if (imageSrc.includes("The Little Blue Dog")) {
            buttonInfo = [
                
            { label: "Amazon", link: "https://www.amazon.com/gp/product/1545755604" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/one-matter-nature-science-tsaus-scientific-revolution/id6443373586" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Josef_Tsau_One_Matter_Nature_Science_Tsau_s_Scient?id=dBGIEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/one-matter-nature-science" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/one-matter-nature-science-josef-tsau/1142082411" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/one-matter-nature-science-tsau-s-scientific-revolution" }
          
            ];
            description ="The Little Blue Dog is a children's book inspired by the real life story of a small Chihuahua named Louie who ends up in a shelter in California. This lovable character represents the countess dogs who find themselves homeless. Louie's journey exemplifies the story of survival, hope and second chances. With a mission to give back, 100% of the profits from the sale of The Little Blue Dog will be donated to animal rescue organizations. For more information about Louie, visit www.thelittlebluedog.com "+
            "<p class='mt-2 fs-5 fw-medium'>Praise and Editorial Reviews</p>"+
            "<p class='mt-2'>'Karen Roberts has masterfully captured the plight of one spunky little dog's sojourn to a better place, while taking the reader through a shelter pet's emotional turmoil. This tail-wagging story, which advocates adoption and responsible pet ownership, is spun in a manner to warm the hearts of many - including mine. I highly recommend this book as a must-read for children and their parents.' - Katherine Heigl, Co-founder, Jason Debus Heigl Foundation</p>"+
            "<p class='mt-2 fs-5 fw-medium'>Awards & Accolades <i class='fa-solid fa-award  fs-5'></i></p>"+
            "<p class='mt-2'>2013 National Indie Excellence Awards Winner</p>"}
            else if (imageSrc.includes("The Gentle Beagle")) {
            buttonInfo = [
                
           
                { label: "Apple Books", link: " https://books.apple.com/us/book/the-gentle-beagle/id924539370" },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/the-gentle-beagle" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Karen_J_Roberts_The_Gentle_Beagle?id=cpGnBAAAQBAJ " },
          
            ];
            description = "Being different can be lonely. But compromising her values just to fit in was not a path the gentle Beagle was willing to take.Fall in love with the gentle Beagle as her bravery and kind heart help her find her true calling. Her courageous journey begins as a hunting dog living in a barn deep in the woods of Virginia. Through scary events and daunting challenges, her uncertain fate leads directly to her life's purpose. Touching the lives of so many along the way, she will reach off the pages and touch your heart as well. The memorable characters in this heartwarming tale teach us lessons about compassion for animals, and strength of character. Even though her life takes some unexpected turns, the gentle Beagle stays true to herself and becomes the best kind of hero, a hero of the heart."}
        
            else if (imageSrc.includes("Terriers Tale Cover")) {
            buttonInfo = [
                
           
                { label: "Apple Books", link: " https://books.apple.com/us/book/the-gentle-beagle/id924539370" },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/the-gentle-beagle" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Karen_J_Roberts_The_Gentle_Beagle?id=cpGnBAAAQBAJ " },
          
            ];
            description = "The animal shelter is no place for an adorable, active little terrier!Bored and lonely, he spends his days hoping to be adopted, longing for a family of his own. By night, he escapes in his mind to a wonderful dream world. The little terrier dreams of living a cowboy’s life, riding horses and herding cattle on the open range. Will his dreams come true?A Terrier’s Tale is a joyful and entertaining story of a little dog with a giant wish. He wants what all dogs deserve, to be part of a family where his life can have purpose and meaning."+
            "<p class=''>Based loosely on the real life dog rescued by author Karen J. Roberts, A Terrier’s Tale represents the plight of all shelter dogs, and the amazing power adopting a pet can have on the human spirit. A Terrier’s Tale is told with humor and affection weaving together delightful characters; both two and four legged, while teaching subtle lessons of family, kindness and the simple beauty of every day life. The story is artfully illustrated with charming and engaging images created by Lilith Jones.</p>"}
        
            else if (imageSrc.includes("A Labyrinth Of LifeTimes")) {
            buttonInfo = [
                
           
            { label: "Amazon", link: " https://www.amazon.com/Labyrinth-Lifetimes-Kathy-Bornino/dp/154575277X " },
                { label: "Apple Books", link: "https://books.apple.com/us/book/a-labyrinth-of-lifetimes/id1525979807 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/a-labyrinth-of-lifetimes-kathy-bornino/1137418147?ean=9781545752777 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Kathy_Bornino_A_Labyrinth_of_Lifetimes?id=3Rz0DwAAQBAJ  " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/a-labyrinth-of-lifetimes" },
                { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/a-labyrinth-of-lifetimes " }
          
            ];
            description = "The animal shelter is no place for an adorable, active little terrier!Bored and lonely, he spends his days hoping to be adopted, longing for a family of his own. By night, he escapes in his mind to a wonderful dream world. The little terrier dreams of living a cowboy’s life, riding horses and herding cattle on the open range. Will his dreams come true?A Terrier’s Tale is a joyful and entertaining story of a little dog with a giant wish. He wants what all dogs deserve, to be part of a family where his life can have purpose and meaning."+
            "<p class=''>Based loosely on the real life dog rescued by author Karen J. Roberts, A Terrier’s Tale represents the plight of all shelter dogs, and the amazing power adopting a pet can have on the human spirit. A Terrier’s Tale is told with humor and affection weaving together delightful characters; both two and four legged, while teaching subtle lessons of family, kindness and the simple beauty of every day life. The story is artfully illustrated with charming and engaging images created by Lilith Jones.</p>"}
        
            else if (imageSrc.includes("Leading With Vision and Heart")) {
            buttonInfo = [
                
           
            { label: "Amazon", link: " https://www.amazon.com/Leading-Vision-Heart-Leonard-Roberts-ebook/dp/B0CGQ3ZC53  " },
                { label: "Apple Books", link: " https://books.apple.com/us/book/leading-with-vision-and-heart-a-memoir/id6463473100  " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Leonard_H_Roberts_Leading_with_Vision_and_Heart_A?id=yvzSEAAAQBAJ  " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/leading-with-vision-and-heart " },
                { label: "Kobo", link: "  https://www.kobo.com/us/en/ebook/leading-with-vision-and-heart-a-memoir " }
          
            ];
            description = "The animal shelter is no place for an adorable, active little terrier!Bored and lonely, he spends his days hoping to be adopted, longing for a family of his own. By night, he escapes in his mind to a wonderful dream world. The little terrier dreams of living a cowboy’s life, riding horses and herding cattle on the open range. Will his dreams come true?A Terrier’s Tale is a joyful and entertaining story of a little dog with a giant wish. He wants what all dogs deserve, to be part of a family where his life can have purpose and meaning."+
            "<p class='mt-2 fs-5 fw-medium'>Editorial Reviews </p>"+
            "<p class=''>Leading with Vision and Heart' transcends the realm of mere professional chronicles; it is an eloquent and heartfelt narrative that underscores the timeless importance of family and the invaluable bonds of friendship in shaping one's life. Your personal journey is nothing short of awe-inspiring. <span class='fw-bold fst-italic'>— John Wilder</span>, Executive Chairman of Bluescape Partners and Former CEO of TXU Energy</p>"+
            "<p class=''>Curly Fries are a national treasure, and we have Len Roberts to thank for that gift to America, along with the wisdom and inspiration he shares in his new book, Leading with Vision and Heart. <span class='fw-bold fst-italic'>— Fort Worth Business Press </span></p>"}
        
            else if (imageSrc.includes("H Zoh Mae (Our Life)")) {
            buttonInfo = [
                
           
            { label: "Amazon", link: " https://www.amazon.com/%CE%96%CE%A9%CE%97-%CE%9C%CE%91%CE%A3-Our-Life-Kefalonia/dp/1545756481  " },
                { label: "Apple Books", link: "https://books.apple.com/us/book/h-%CE%B6%CF%89%CE%B7-%CE%BC%CE%B1%CF%82-our-life/id6445275770?ls=1 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/h-918-937-919-924-913-931-louis-garbis/1144660061?ean=9781545756478   " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Louis_Garbis_H_%CE%96%CE%A9%CE%97_%CE%9C%CE%91%CE%A3_Our_Life?id=st-kEAAAQBAJ  " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/our-life-louis-garbis  " },
                { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/h-our-life  " }
          
            ];
            description = "«Η ΖΩΗ ΜΑΣ» (our life) is a homage and a spiritual journey to our origins, our place of birth. I wanted to learn about our family's life in Kefalonia and its trials and tribulations in some very challenging times. Its occupation by the Axis Powers in WWII, the subsequent Greek Civil War, and the devasting earthquake that caused great damage to much of Kefalonia, aggravating the severe poverty that most Kefalonians were already experiencing. I also thought it would be a lost opportunity for us not to share our family's story with our descendants and the subsequent emigration to America."+
            "<p class='mt-2'>In addition to the family history, 'Our Life' compares democracy versus communism, the American and Greek Civil Wars and their impact on each country, the fundamental issue of slavery and why it was so vile, criminal, and wrong, and the plight and betrayal of the American Indians as a result of the migration of the white men to the Americas. My book also outlines the seminal impact of the initial Greek victories over Italy in WWII and their significant ramifications to the world, and explains how a young Evzone's sacrifice reinforces and represents the strong and unconditional love of freedom of the Greek people.</p>"}
        
            else if (imageSrc.includes("Redemption A Journey from Tragedy to Triumph")) {
            buttonInfo = [
                
           
            { label: "Amazon", link: "https://www.amazon.com/Redemption-Journey-Tragedy-Lynda-Vialet/dp/1545751102 " },
                { label: "Apple Books", link: "https://books.apple.com/us/book/redemption-a-journey-from-tragedy-to-triumph/id1501800537 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/redemption-lynda-m-vialet/1136606298?ean=9781545751107  " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Lynda_M_Vialet_Redemption_A_Journey_from_Tragedy_t?id=1IvUDwAAQBAJ " },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/redemption-a-journey-from-tragedy-to-triumph " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/redemption-a-journey-from-tragedy-to-triumph  " }
          
            ];
            description = "Redemption: A Journey from Tragedy to Triumph, is an intense drama based on a true story about a young woman’s journey to overcome the shame and guilt of a ruthless sexual assault. With quick thinking, she was able to fool her assailant and survive the attack only to endure a long three-year battle to bring her assailant to justice. She embraced the love and support from her family but was very emotionally scarred as a result of her attack. This story is how she gained courage and strength through this tragedy and how she found her purpose through the pain. "}
        
            else if (imageSrc.includes("Craft Your Calling")) {
            buttonInfo = [
                
           
            { label: "Amazon", link: " https://www.amazon.com/Craft-Your-Calling-30-day-Training/dp/154575439X  " },
                { label: "Apple Books", link: "https://books.apple.com/us/book/redemption-a-journey-from-tragedy-to-triumph/id1501800537 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/redemption-lynda-m-vialet/1136606298?ean=9781545751107  " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Lynda_M_Vialet_Redemption_A_Journey_from_Tragedy_t?id=1IvUDwAAQBAJ " },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/redemption-a-journey-from-tragedy-to-triumph " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/redemption-a-journey-from-tragedy-to-triumph  " }
          
            ];
            description = "The problem in the personal development and self-improvement market for the target reader is that every book merely tells you what you need to do to be a better version of yourself. Every author presents their list of things needed to grow and find meaning in life. Their end goal is to educate the target reader without regard for actual learning and growth."+
            "<p class=''>In Craft Your Calling, Marc Casciani gives you a 30-day warm-up to prepare for a journey to craft your calling. A calling is a worthy occupation where one derives meaning. It requires hunger and passion. It leverages the one true gift we have. We’re all here for a reason. We’re all here to do something great. But it’s not through our job. It’s through our calling. The Bible says in Ephesians 4:1 that we are to “live up to the life which God called you.”</p>"+
            "<p class=''>Marc Casciani as a professional coach has completed the journey upon which you the reader want to embark. He has crafted his calling, and his story uniquely qualifies him to be your coach in this endeavor. This book is not for everyone, but if you commit, then you won’t have to walk your journey alone.</p>"}
        
          
            else if (imageSrc.includes("Raising a Healthy Child")) {
            buttonInfo = [
                
            { label: "Amazon", link: "https://www.amazon.com/Raising-Healthy-Child-Techniques-Experiences/dp/154574467X " },
                // { label: "Apple Books", link: "" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/raising-a-healthy-child-meena-chintapalli/1133795584?ean=9781545744673 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Dr_Meena_Chintapalli_Raising_a_Healthy_Child_Unive?id=Du-xDwAAQBAJ " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/raising-a-healthy " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/raising-a-healthy-child-universal-nurturing-techniques-to-overcome-adverse-childhood-experiences-child-trauma-and-behavior-disorders" }
            
          
            ];
            description ="The power of brain training through nurture using multisensory integration zero to three years and even up to five years of life is essential to prevent behavior and learning disorders, and youth health-risk behaviors. This book is a humanitarian contribution from the Society for Assistance International (SAI) and the SAI Institute of Educare, with the intention of preventing child trauma and consequent neurodevelopmental and physical disorders.This book is the result of my passion to reach out to all and ensure that every child is born to give something back to society. Every parent loves their progeny and wants to give them the best. I am certain that parents might have read thousands of books filled with suggestions on parenting techniques, regimental reward, and reactive limit-setting techniques. But awareness by parents of giving positive early experiences through nurture will help build holistic, intellectual, and effective personality development extracted from every newborn"+
             "<p class=''>A knowledgeable parent will seek an education that explains how to nurture and extract inherent potential from each newborn. They will be happy to move away from old theories on raising an infant and will eagerly self-educate to develop the skills to be an effective parent. There is one universal truth that differentiates humanity from the rest of creation. It is only in human beings that the five senses connect the individual to the world with the executive brain, which sits on the top of the eye sockets—orbits—and helps use discrimination and self-regulation to balance all the em</p>"}
        
            else if (imageSrc.includes("Witnessing and Surviving The Holocaust")) {
            buttonInfo = [
                
            // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "http://books.apple.com/us/book/id1607325531" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Emerich_Roth_Witnessing_and_Surviving_the_Holocaus?id=L2FbEAAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/witnessing-and-surviving-the-holocaust-emerich-roth/1140937911?ean=2940160912066" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/witnessing-and-surviving-the-holocaust" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/eden-s-children" }
          
            ];
            description ="Emerich is my name. I am now an old man, shaped by the experiences that a diverse and rich life has given me. ' Emerich Roth's crime was that he was a Jew. Therefore, he ended up in the Nazi extermination camp. But he escaped both Hitler and death. With his story, Emerich Roth wants to show the incredible power that man possesses. How he can rise from the worst humiliation. And that from the most terrible situations she can develop something positive. Emerich himself is a living example. His story of how he survived the Holocaust is partly black at night, but his outlook on life is bright and optimistic. After fighting for his life in the worst of experiences, he has since dedicated his life to fighting violence, racism and oppression. The strength of his struggle becomes apparent to anyone who takes part in his story of surviving the Holocaust."}
        
            else if (imageSrc.includes("Ancient Sauk")) {
            buttonInfo = [
                
            // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1500127818" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/J_Price_Ph_D_Ancient_Sauk_Ojibway_and_Winnebago_Co?id=_RXSDwAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/ancient-sauk-ojibway-and-winnebago-cosmology-j-price-phd/1136514818?ean=2940163062102" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/ancient-sauk-ojibway-and-winnebago-cosmology" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/ancient-sauk-ojibway-and-winnebago-cosmology-myth-mounds-and-artifacts-a-theory-of-ancestoral-diffusion" }
          
            ];
            description ="This text describes Ojibway, Sauk, and Winnebago (Ho Chunk) Creation Legends, Indian Mounds, and artifacts to describe an east-west trade theory that reflects the development of the Sauk Tribe in America, China, and India. It also describes the use of Indian Mounds as astronomical clocks that physically describe their legends."}
        
          
            else if (imageSrc.includes("River Rock Motorcycle Girl")) {
            buttonInfo = [
                
            // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1489276720" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/J_Price_River_Rock_Motorcycle_Girl?id=LhjADwAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/river-rock-motorcycle-girl-j-price/1135137805?ean=2940163134915" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/river-rock-motorcycle-girl" },
                { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/river-rock-motorcycle-girl" }
          
            ];
            description ="Ellie is a rebellious teenage girl craving for more excitement and freedom. She leaves home and heads toward a popular biker bar called The Clubhouse. Ellie does not receive the warmest of welcomes, but her spunk and determination get her in a local motorcycle gang. On one of her rides, she and her crush Strider venture into a cave. Little does Ellie know, she is about to discover something inside that will change her life forever and that life on the road was not her true calling after all."}
        
          
            else if (imageSrc.includes("Rock Lake's Stellar Pyramids")) {
            buttonInfo = [
                
            // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1500127640" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/J_Price_Ph_D_Rock_Lake_s_Stellar_Pyramids_Legends?id=JBbSDwAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/rock-lakes-stellar-pyramids-j-price-phd/1136514817?ean=2940163062096" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/rock-lakes-stellar-pyramids" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/rock-lake-s-stellar-pyramids-legends-of-wisconsin-s-sunken-site-a-preliminary-study " }
          
            ];
            description ="In 1988, a side-scan sonar reading of Rock Lake, Wisconsin's underwater structures was recorded by drivers, under the direction of University of Wisconsin Professor of Civil Engineering Dr. James Scherz. After viewing the image, the author worked with Sac and Fox Nation elders in Wisconsin and Stroud, Oklahoma, to obtain the translations of the Medewigan, or Medicine Lodge. Similar legends are described in Ashinaubig, Menominee, Ojibway, and Winnebago (Ho Chunk) traditions and in an 1890 Ojibway text. However, the oldest written record of the Sauk Tribe is found in an 1100 B.C. Chinese Imperial record that describes the Emperor's notation of similarity in the warriors' archery skills and red-plumed Mohawks, which recalled their own Red Phoenix creation legends."}
        
          
            else if (imageSrc.includes("Testament in black")) {
            buttonInfo = [
                
           // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://www.ebooks2go.com/testament-in-black" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Brandon_Iwan_Testament_in_Black?id=0HzsEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/testament-in-black" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/testament-in-black" },
            ];
            description ="Testament in black is a terrifying journey to the darkest corners of the mind. The tales and gothic poems you will find here cover unholy actions, evil rituals, stories about anger and despair, and other mind provoking verses. The Testament in Black by Brandon Iwan is a book you can start and stop whenever you want. The stories are episodic so there is no start and no end. These stories are filled with morbid imagery and short enough to capture your attention leaving you wanting more. So come and feed your mind."}
        
            else if (imageSrc.includes("Turn Me Loose White Man")) {
            buttonInfo = [
                
            // {label: "Amazon", link: "https://www.amazon.com/Testament-Black-Brandon-Iwan/dp/1545757143 " },
                { label: "Apple", link: "https://books.apple.com/us/book/turn-me-loose-white-man/id1531996840" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Allen_Lowe_Turn_Me_Loose_White_Man?id=rxz9DwAAQBAJ " },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/turn-me-loose-white-man  " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/turn-me-loose-white-man" }
          
            ];
            description ="Turn Me Loose White Man is an examination of virtually all forms of American vernacular music throughout the first 60 years of the twentieth century. It includes a 30 cd set (available separately at www.allenlowe.com) and complete discussion and annotation of over 800 performances in the following genres: Ragtime, minstrelsy, blues, jazz, hillbilly music, country music, blues, rhythm and blues, folk, and rock and roll."}
        
            else if (imageSrc.includes("Rhymes and Reasons")) {
            buttonInfo = [
                
            {label: "Amazon", link: "https://www.amazon.com/Rhymes-Reasons-Lyrical-Expressions-Marks/dp/1545750467 " },
                { label: "Apple", link: "https://itunes.apple.com/us/book/id1460383748" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Bob_Marks_Rhymes_N_Reasons_The_Lyrical_Expressions?id=yWuTDwAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/rhymes-n-reasons-bob-marks/1131291607?ean=9781545750469" },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/rhymes-n-reasons-the-lyrical-expressions-of-bob-marks " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/rhymes-n-reasons-the-lyrical-expressions-of-bob-marks " }
          
            ];
            description ="In that Rhymes and Reasons are songs, not poems, I've left them in the accepted patterns necessary to set them to music. There may be some repetition but rare is the song sang in its entirety without repeating verses or choruses especially, what is now considered the chorus. The earlier songs were primarily AABA or ABAC patterns which were the norm back then. As patterns evolved into the more contemporary verse-chorus mode, I'd suspect that happened because repetition of the chorus allows for more rousing concert finales in which audience might be tempted to sing along."}
        
            else if (imageSrc.includes("From Ruins To Rebuilding")) {
            buttonInfo = [
                
              // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://itunes.apple.com/us/book/from-ruins-to-rebuilding-lessons-from-the-book-of-nehemiah/id472655053?ls=1&mt=11" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Burliss_Parker_From_Ruins_to_Rebuilding_Lessons_fr?id=75RFDgAAQBAJ" },
                { label: "Barnes & Noble", link: "http://www.barnesandnoble.com/w/from-ruins-to-rebuilding-burliss-parker/1120601795?ean=2940157387679" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/ruins-rebuilding-lessons-book-nehemiah" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/from-ruins-to-rebuilding-lessons-from-the-book-of-nehemiah" },
            ];
            description ="As you go through life, you will undoubtedly encounter crises that will leave you broken and wounded. These could be wounds from a shattered marriage, from a failed business partnership, or even from the elders, pastors, board members or teachers at a church. The question is how you will choose to respond when this occurs. Will you pick up the pieces and move on? Or will you merely content yourself to live in the ruins of your former life?From Ruins to Rebuilding draws on principles from the book of Nehemiah and demonstrates the process of Israelites went through to rebuild the walls of the city of Jerusalem after they were destroyed."+
             "<p class=''>These same principles can be used as a resource for pastors or counselors who are assisting people through difficult life experiences, or they can be used by any layperson who desires a step-by-step process for healing and rebuilding.If you have suffered loss and need healing and restoration, know that God has a n incredible purpose and future in store for you. It is time for you to step out of the ruins and gain a new vision, a new hope, a new promise and a new purpose. But you just take the first step and decide that you will no longer be a victim. From Ruins to Rebuilding will show you how to start the healing process and persevere until you reach wholeness in your life.</p>"}
        
            else if (imageSrc.includes("God Of The Storm")) {
            buttonInfo = [
                
              // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://itunes.apple.com/us/book/god-of-the-storm-there-stood-by-me-this-night/id1215600141?ls=1&mt=11" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Burliss_E_Parker_God_of_the_Storm_There_Stood_by_m?id=23BYDgAAQBAJ" },
                { label: "Barnes & Noble", link: "http://www.barnesandnoble.com/w/god-of-the-storm-dr-burliss-e-parker/1122593823?ean=2940157245306" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/god-storm-stood-night" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/god-of-the-storm-there-stood-by-me-this-night" },
            ];
            description ="“So when the ship was caught, and could not head into the wind, we let her drive” (Acts 27:15). The meaning here is that the storm was so powerful they surrendered control of the ship to the storm. This book has been in the making for over twenty years. I have observed and experienced the storms of life, the unplanned and unexpected changes that blow into our lives and change the direction we were going. Everyone experiences storms in their lives. Storms can be caused by your own conduct or by the actions of others."+
             "<p class=''>Storms can be a satanic attack or just the events of life. It is difficult to see God’s plans in the storm. However, if He has a job for us to accomplish for Him, He will bring the circumstances into our lives to take us where He wants us. “For there stood by me this night an angel of the God to whom I belong and whom I serve” (Acts 27:23). What a wonderful promise! We do not go through the storms of life alone! He is always with us. Remember the storms of life are never bigger than the God we serve!</p>"}
        
            else if (imageSrc.includes("Timekeepers")) {
            buttonInfo = [
                
              { label: "Amazon", link: "https://www.amazon.com/Timekeepers-1-C-Reagan/dp/197959029X" },
              { label: "eBooks2go", link: "https://www.ebooks2go.com/timekeepers " },
              { label: "Google Play", link: "https://play.google.com/store/books/details/C_A_Reagan_Timekeepers?id=uaNEDwAAQBAJ " },
              { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/timekeepers-3" },
            ];
            description ="Timekeepers is the first book in the Timekeepers Trilogy, based on a fictional family in Texas who struggle to keep their family safe from a group of aliens - who for many years were thought to be family friends. These aliens have been on earth for some time, explorers stranded after their home world was destroyed. It was out of necessity they came, not to conquer or destroy. That necessity and the background of peace and technology enjoyed by the population of their planet caused the crew to seek out ways to help earth live in peace."+
             "<p class=''>Once they realize the people of earth have not developed the ability to live in peace, the commander of the exploration ship changes the mission, and becomes convinced he can utilize the special talents of Walt and Sarah Thompson's children, along with the advanced alien technology, to change time and bring their destroyed home world back into existence. For his plan to work he must kidnap the children, get rid of their parents and Dawson Enright the children’s uncle, an operative of the CIA. The fight to keep the children safe takes Walt, Sarah and Dawson across Texas, New Mexico and a large part of the Milky Way galaxy as they desperately seek to take control of the alien spacecraft with their kidnapped children aboard.</p>"}
        
        
            else if (imageSrc.includes("Through The Eyes Of Blue")) {
            buttonInfo = [
                
              { label: "Amazon", link: "https://www.amazon.com/Through-Eyes-Blue-Catherine-Matsalla/dp/1545753865 " },
              { label: "Apple", link: "https://books.apple.com/us/book/through-the-eyes-of-blue/id1570760344  " },
              { label: "eBooks2go", link: "https://www.ebooks2go.com/through-the-eyes-of-blue " },
              { label: "Google Play", link: "https://play.google.com/store/books/details/Catherine_Matsalla_Through_the_Eyes_of_Blue?id=kYYxEAAAQBAJ " },
              { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/through-the-eyes-of-blue " },
            ];
            description ="<span class='mt-2 fs-5 fw-medium'>A Tail of Enduring Love"+
             "<p class=''>Ellie and Blue have been running their entire lives. An internationally recognized ultra-endurance athlete, Ellie has competed in the world’s most difficult races with her faithful canine companion Blue never far from her side. Beyond running, they’ve had to navigate life’s most daunting challenges. However, locked behind Blue’s soulful eyes is a secret a secret that will reveal the truth about Ellie and Blue that will change their lives forever.</p>"+
             "<p class=''>A timeless story exploring the depths of love, loyalty, and perseverance. Laugh and cry as you follow Ellie and her dog, Blue, discover that sometimes self-discovery, resilience, renewal, and redemption come from the most unlikely and unexpected places.</p>"+
             "<p class=''>This contemporary romance novel is a cross between Born to Run, The Secret, and A Dog’s Purpose.</p>"+
             "<p class='mt-2 fs-5 fw-medium'>Editorial Reviews </p>"+
             "<p class=''>“Catherine Matsalla's Through the Eyes of Blue is a compelling drama that touches upon the timeless themes of perseverance and redemption.” <span class='fw-medium fst-italic'> —  IndieReader</span> </p>"+
             "<p class=''>“Emotionally written, with remarkable depth to a canine character, Through the Eyes of Blue draws the reader in and makes them love Blue - not just through his actions and presence in Ellie's life, but through the utter devotion and loyalty he exudes. The examination of the unique attachment that is formed between a dog and a person is wonderfully done, and anyone who considers themselves a dog person will find themselves emotionally invested in this story.” <span class='fw-medium fst-italic'> —  ManyBooks</span> </p>"+
             "<p class='mt-2 fs-5 fw-medium'>Awards & Accolades <i class='fa-solid fa-award  fs-5'></i></p>"+
            "<p class='mt-2'>IndieReader's Best Reviewed Books of August 2021</p>"
          }
        
            else if (imageSrc.includes("Primeblades")) {
            buttonInfo = [
                
              { label: "Amazon", link: " https://www.amazon.com/I-Drive-Primeblades-Charring-Cross/dp/1545743436" },
              { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/i-drive-charring-cross/1131479411?ean=9781545743430  " },
              { label: "eBooks2go", link: "https://www.ebooks2go.com/i-drive-primeblades " },
              { label: "Google Play", link: "https://play.google.com/store/books/details/Charring_Cross_I_Drive_Primeblades?id=j1mWDwAAQBAJ " },
              { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/i-drive-primeblades " },
            ];
            description ="Ulrich and his sister never got along in real life. Ulrich was always spending free time in virtual reality games, while Jenna was cheerleading for her school. But when Jenna slips into a coma and ends up in Ulrich's Favorite Massively Multiplayer Online game, Primeblades Online, it's up to Ulrich and his friends to get Jenna and her allies out of the game and back to their bodies IRL, but with the Hacker who put them in the game on the loose Ulrich will have to put his all into something he never took seriously to begin with."}
        
            else if (imageSrc.includes("World Space League Presents")) {
            buttonInfo = [
                
              { label: "Amazon", link: " https://www.amazon.com/World-Space-League-Presents-Kombaat-ebook/dp/B086V3MQHQ" },
              { label: "eBooks2go", link: "https://www.ebooks2go.com/the-world-space-league-presents-kombaat  " },
              { label: "Google Play", link: "https://play.google.com/store/books/details/Daniel_Rodriquez_World_Space_League_Presents_Komba?id=nPfZDwAAQBAJ" },
              { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/the-world-space-league-presents-kombaat-b-e" },
            ];
            description ="Ahbleza a Native American Ex-Navy seal with a bout of PTSD, volunteers for another Kombaat Mission with Ex-Army Ranger JimBob a Texas Cowboy. They started as enemies, but with time they became brothers in arms. Ahbleza's children are what the World Space League prophecies have talked about for thousands of years. The most unlikely trio Ahbleza, JimBob, and Dog have a mission to complete, but one of them must make the greatest sacrifice to save his brothers."}
        
            else if (imageSrc.includes("Meditation Education")) {
            buttonInfo = [
                
              { label: "Apple", link: " https://books.apple.com/us/book/meditation-education/id1493902987               " },
              // { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/i-drive-charring-cross/1131479411?ean=9781545743430  " },
              { label: "eBooks2go", link: "https://www.ebooks2go.com/meditation-education" },
              { label: "Google Play", link: "https://play.google.com/store/books/details/Deb_Huntley_Meditation_Education?id=zhnIDwAAQBAJ" },
              { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/meditation-education" },
            ];
            description ="A critique on meditation for everyone, and teaching children mindfulness. "}
        
            else if (imageSrc.includes("My Family Cookbook Mothers Against Hunger")) {
            buttonInfo = [
                
                  // { label: "Amazon", link: "" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/id1492969367" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Richard_Lewis_Untied_A_Novella?id=I_bGDwAAQBAJ" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/untied-richard-lewis/1135800582?ean=2940163143139" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/untied-a-novella" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/untied-a-novella" },
        ];
            description ="My Family Cookbook: Mothers Against Hunger has yummy recipes that are mouthwatering and will make you beg for more. I am the single parent of five grown kids, grandmother of 15 grandkids, and great grandmother of 14 grandkids."+
            "<p class=''>My cookbook is child-friendly. Any child eating my recipes will love them. I have made this cookbook with kids in mind. I came up with recipes that any child would eat. Most cookbooks have grownups in mind when they write them. My cookbook caters to both children and grownups.</p>"+
            "<p class=''>All of the recipes in the cookbook were judged by children and grownups. There’s one proud little girl who helped choose the cover to My Family Cookbook: Mothers Against Hunger. Great job! Everyone loves it. </p>"}
        
            else if (imageSrc.includes("The Coming of a Cluttered Day")) {
            buttonInfo = [
                
                { label: "Amazon", link: "https://www.amazon.com/Coming-Cluttered-Day-Segal-Don/dp/1545738505" },
                { label: "Apple Books", link: "https://books.apple.com/us/book/the-coming-of-a-cluttered-day/id1435052144 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Don_Segal_The_Coming_of_a_Cluttered_Day?id=9TZsDwAAQBAJ " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/the-coming-of-a-cluttered-day-segal-don/1129528057?ean=9781545738504 " },
                { label: "eBooks2go", link: "https://www.kobo.com/us/en/ebook/the-coming-of-a-cluttered-day" },
        ];
            description ="The Coming of a Cluttered Day (Selected Poems By Don Segal) is a poetry book with nature poems, poems about seasons, poems about the dark, and poems about the night."}
          
            else if (imageSrc.includes("Creating A Profitable Business")) {
            buttonInfo = [
                
                { label: "Apple", link: "https://books.apple.com/us/book/creating-a-profitable-business/id1463035135" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Jack_McNaughton_Creating_a_Profitable_Business?id=reWWDwAAQBAJ " },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/creating-a-profitable-business " },
                { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/creating-a-profitable-business " },
        ];
            description ="An essential handbook for entrepreneurs with the basic techniques to follow in creating a viable idea and startup."}
          
            else if (imageSrc.includes("Romantic Tales from Missouri")) {
            buttonInfo = [
            
            { label: "Apple", link: "https://books.apple.com/us/book/romantic-tales-from-missouri/id1497842308" },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Jake_Townsend_Romantic_Tales_from_Missouri?id=9EzODwAAQBAJ" },
            { label: "eBooks2go", link: "https://www.ebooks2go.com/romantic-tales-from-missouri " },
            { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/romantic-tales-from-missouri  " },
        ];
            description ="A collection of romantic stories taken place over time."}
          
            else if (imageSrc.includes("Memoirs of a Straight Male Hairstylist")) {
            buttonInfo = [
            
            { label: "Google Play", link: "https://play.google.com/store/books/details/Jason_Dankert_Memoirs_of_a_Straight_Male_Hairstyli?id=UFzUDwAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/memoirs-of-a-straight-male-hairstylist " },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/memoirs-of-a-straight-male-hairstylist-sex-cuts-and-rock-n-roll" },
        ];
            description ="CAUTION: Reading this book has caused readers to; laugh till almost pissing themselves, getting a little turned on, have conflicted feelings of being both appalled and jealous of the author's true-life experiences, and of actually having learned life-changing advice not expected from a book like this. You're about to embark on a wild ride - so lay back and hold on to your bedpost as if your life depends on it. "}
          
            else if (imageSrc.includes("Behind the Scenes")) {
            buttonInfo = [
            
               { label: "Amazon", link: " https://www.amazon.com/Behind-Scenes-Joseph-J-Allen/dp/1545753075" },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/behind-the-scenes-joseph-j-allen/1138364524?ean=9781545753071 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Joseph_J_Allen_Behind_the_Scenes?id=uG4PEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/behind-the-scenes " },
                { label: "kobo", link: " https://www.kobo.com/us/en/ebook/behind-the-scenes-66 " },
        ];
            description ="This book is designed as a source to help navigate getting into the often unpredictable movie business and provide freelancing knowledge needed to help stay working behind the scenes."}
          
            else if (imageSrc.includes("Simple Accent Reduction")) {
            buttonInfo = [
            
             { label: "Apple", link: "https://itunes.apple.com/us/book/simple-accent-reduction-speech/id592983813?ls=1&mt=11" },
             { label: "eBooks2go", link: " https://www.ebooks2go.com/simple-accent-reduction-speech-training-audio-book " },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Judy_Young_Simple_Accent_Reduction_Speech_Training?id=NO5mDwAAQBAJ" },
            { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/simple-accent-reduction-speech-training-audio-book" },

        ];
            description ="Communicate Successfully in Business and in Life! Simple Accent Reduction & Speech Training is a complete, hands-on workbook that gives all of the basic tools you need to speak English more clearly and confidently. It gives easy step-by-step exercises and drills in exact placement of lips, teeth and tongue for all of the sounds of the English language. It includes special warm-up exercises that strengthen the voice and all muscles used for speaking. Also included are tongue twisters to give the voice a workout, plus an audio version dictionary pronunciation key. This book is excellent for anyone of any nationality, and effective help for actors and public speakers."}
          
            else if (imageSrc.includes("My Sister the Werewolf")) {
            buttonInfo = [
            
            { label: "Amazon", link: " https://www.amazon.com/My-Sister-Werewolf-Kathy-Stacey-ebook/dp/B0797FGWSS " },
                { label: "Apple", link: " https://books.apple.com/us/book/my-sister-the-werewolf/id1340193637" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Kathy_Stacey_My_Sister_the_Werewolf?id=LcRIDwAAQBAJ" },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/my-sister-the-werewolf" },
                { label: "kobo", link: " https://www.kobo.com/us/en/ebook/my-sister-the-werewolf  " },
        ];
            description ="First they were chased by a werewolf. Then his sister was scratched...Ouch! And now his sister is a werewolf herself. It's not that Marcus is scared of seeing a werewolf. He had always wanted to see one in person. He just didn't expect that his wish would come true and he would come face to face with one. Now he has bigger problems. Since his sister Sandra was scratched by a werewolf she has begun acting strange. Now it seems Sandra is turning into a werewolf herself and there is nothing that Marcus can do to stop her transformation. Things begin getting worse. Marcus finds out there are a lot more than just one werewolf at his school. The werewolf that scratched her is coming for her, and it is up to Marcus and Dillon to stop him before he takes her away for good."}
          
            else if (imageSrc.includes("Call Up Put Down")) {
            buttonInfo = [
            
                { label: "Apple", link: " https://books.apple.com/us/book/call-up-put-down/id1014515442                " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Larry_Ventresca_Call_Up_Put_Down?id=gjYJCgAAQBAJ " },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/call-up-put-down " },
                { label: "kobo", link: " https://www.kobo.com/us/en/ebook/call-up-put-down  " },
        ];
            description ="This is an instructional guide for the beginning investor. The guide will provide basic knowledge and terminology of the financial industry. "}
          
            else if (imageSrc.includes("Rant")) {
            buttonInfo = [
         
                { label: "Amazon", link: "https://www.amazon.com/Rant-M-K-Hoffman/dp/1545754225 " },
                { label: "Apple", link: " https://books.apple.com/us/book/rant/id1588346631 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/rant-m-k-hoffman/1143468124?ean=9781545754221" },   
                { label: "Google Play", link: "https://play.google.com/store/books/details/M_K_Hoffman_Rant?id=75lFEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/rant-hoffman" },
                { label: "kobo", link: "https://www.kobo.com/us/en/ebook/rant-12" },
        ];
            description ="The true story of one individual's campaign against the big banks of America in an attempt to save the world's economy."+
             "<p class=''>Throughout world history, empires have collapsed due to widespread corruption and lack of accountability; unfortunately, Hoffman came to realize that America could follow this trend, but he remains determined to prevent that from ever happening.</p>"+
              "<p class=''>In his debut memoir, Hoffman exposes corruption within America's big banks while recounting his valiant campaign against it.</p>"+
             "<p class=''>A main focus of Rant is exposing how financial institutions manipulated oil prices following Hurricane Katrina in 2005 - an act that Hoffman believes set citizens back financially and ultimately became a factor behind the start of the Great Recession. In the following years, he embarked on an epic journey to bring this misdeed to the attention of senators, trade commissions, the FBI, and many others.</p>"+
             "<p class=''>Hoffman faced his fair share of resistance throughout his crusade against corruption, but he never allowed any roadblocks to deter his fight for the truth.</p>"+
             "<p class=''>With years of experience in macroeconomics, he's able to take complex concepts and write about them in a simple, yet entertaining way that will resonate with any reader.</p>"+
             "<p class=''>Rant sets a new standard for gripping, unforgettable memoirs. Don't miss out on the truth - read Rant today!</p>"+
             "<p class='mt-2 fs-5 fw-medium'>Praise and Editorial Reviews</p>"+
             "<p class=''>“M.K. Hoffman's RANT is an insightful read for anyone who enjoys a David versus Goliath tale or seeks to better understand the world in which they live.” <span class='fw-medium fst-italic'>— IndieReader</span> </p>"}
            
          
            else if (imageSrc.includes("Where is the Letter from My Friend")) {
            buttonInfo = [
               
                { label: "Google Play", link: "https://play.google.com/store/books/details/Maka_Sepashvili_Where_is_the_Letter_from_my_Friend?id=aL2PDwAAQBAJ" },
                { label: "Apple", link: "https://itunes.apple.com/us/book/id1458453111" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/where-is-the-letter-from-my-friend " },
        ];
            description ="Where is the Letter from My Friend is a children's picture book about friendship. The main character is waiting for a letter from their friend Nick, who lives far away, and needs help finding his letter. The child asks several animals on the farm, but no one knows the letter's location.Where is Nick's letter? Maka Sepashvili's novel not only teaches children patience and the value of friendship, but it will also show early readers how to pronounce the names of domestic farm animals. "+
             "<p class=''> Parents can also join in on the fun by helping their children write a letter back to Nick or even paint a reply. Nick is waiting for your letter, kids.</p>"
            }
            else if (imageSrc.includes("Main Colors Fairy Tales")) {
            buttonInfo = [
            
                { label: "eBooks2go", link: "https://www.ebooks2go.com/main-colors:-fairy-tales" },
        ];
            description ="Long time ago, when the universe was created, humans were born. They didn't appreciate the immortality gifted by God, so twin brothers Life and Death were born. Both lived separately and served their pursuits and affairs. They hadn't seen each other in a very long time, and one day Life unexpectedly came across Death. “Hello, how are you doing? We haven't met in so long!“ Life said in a jolly voice. “Oh,“ sighed Death, “what can I say, I'm lonesome. Nobody loves me. Everybody is afraid of me; they curse my existence. People hate me. However, what can I do? This is why I was born; this is my purpose. Nevertheless, you aren't the same–you are different,“ he said in jealously. “No feast table is laid without you. They say toasts, and they praise and bless you. It's true that we are brothers–offspring of one father. But we have different fates and destinies...“ “Good,“ Life stood up, “let's go and see the world. We'll find the people who don't hate you. Who knows–maybe there will be more than we know."+
             "<p class=''> You will find out that humans themselves are creators of their fates. You only meet them at the time of their deaths, but I spent their entire lives with them and know well what it means to carry the pain of human race on my shoulders.“ Stories deal with humans' sins like pride, envy, anger, greed, sloth, impishness, perfidy, disloyalty, arrogance, deception, about death and life and etc. That life is just a minute to live and percept; human is often just a weapon in hands of fortune. How people seek for the happiness, try to survive and live, and often can't see, that simply happiness lies in front of them, watching something doesn't mean seeing. The stories give people to judge and show them their inner hidden world. Here you'll meet kings, angels, beloved bees, just ordinary people and etc.</p>"
            }
            else if (imageSrc.includes("Void of the Cosmos")) {
            buttonInfo = [
            
            { label: "Amazon", link: "https://www.amazon.com/Void-Cosmos-Marcus-Armantrout-ebook/dp/B09L5D5NK2" },
                { label: "Apple", link: " https://books.apple.com/us/book/the-void-of-the-cosmos/id1591569069" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Joseph_J_Allen_Behind_the_Scenes?id=uG4PEAAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/the-void-of-the-cosmos" },
                { label: "kobo", link: "https://www.kobo.com/us/en/ebook/the-void-of-the-cosmos" },
        ];
            description ="Inspired by the words of H.P Lovecraft and Algernon Blackwood, The Void of the Cosmos is a tribute to the past, with tales that conjure up our deepest fears of what lives beyond the realm of understanding, bringing upon a modern age of terror, suspense, and insanity. "            }
       
            else if (imageSrc.includes("Faces and Lies")) {
            buttonInfo = [
            
            { label: "Amazon", link: " https://www.amazon.com/Faces-Lies-Margaret-Podmore-Emery/dp/1545754659 " },
                { label: "Apple", link: "https://books.apple.com/us/book/faces-lies/id1601372469 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/faces-lies-margaret-podmore-emery/1140811359?ean=9781545754658" },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Margaret_Podmore_Emery_Faces_Lies?id=cqlVEAAAQBAJ&pli=1 " },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/faces-and-lies " },
                { label: "kobo", link: "https://www.kobo.com/us/en/ebook/faces-lies" },
        ];
        description ="For over a year, a woman's home is entered by strangers, but nothing of value is stolen, except her sense of security. She receives crank calls where no one speaks then hangs up. She is followed around the mall during a shopping trip. And the police tell her they can do nothing."+
             "<p class=''>Amidst these distractions, Devin Marques must compete in a horse show the only time her groom, Wendy Hilliard – who hasn't taken a single day off since she was hired – goes missing, under strange circumstances. She receives “ notes from ” her unknown assailant, accusing her of “not seeing” some person she realizes must be part of her social circle. Someone close to her, who has the ability to harm anything and anyone special to her. But who? And why?</p>"+
             "<p class='mt-2 fs-5 fw-medium'>Praise and Editorial Reviews</p>"+
             "<p class=''>“A good mystery novel also has that wonderful element of surprise, that final twist at the end when all is revealed and the puzzle comes together. The ending here is satisfying, uncovering a believable villain with scary motives and absolutely no moral boundaries.” <span class='fw-medium fst-italic'>— ManyBooks</span> </p>"}
            
            else if (imageSrc.includes("Do Better Be Better")) {
            buttonInfo = [
            
            { label: "Amazon", link: "https://www.amazon.com/Better-You-Dont-Have-YOU/dp/1545756651" },
                { label: "Apple", link: "https://books.apple.com/us/book/do-better-be-better-you-dont-have-to-you-get-to/id6450206410 " },
                { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/do-better-be-better-you-dont-have-to-you-get-to-mark-d-estes/1143690489?ean=9781545756652 " },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/do-better-be-better-you-dont-have-to-you-get-to" },
        ];
        description ="Good for you for looking at this book and thinking about doing better and being better! You have made it this far in life and have a lot more you can achieve. You have tremendous abilities to make things happen, achieve greatness, benefit society, and to be happy! But how can you get to that point?"+
             "<p class=''>Do Better! Be Better! is a compilation of valuable lessons from business titans, successful billionaires, hall-of-fame athletes, books, courses, and research about how to improve your life and get more of what you want. This book contains a wealth of information, wisdom, and insights that you can use to achieve greatness, be happy, and surpass your wildest dreams. Additionally, my book contains goal-setting worksheets and chapter questions to help place you on the right track to personal growth.</p>"+
             "<p class=''>Ultimately, Do Better Be Better! will help you learn how to improve yourself and maximize your true potential. Remember, YOU are the master of your own destiny. With enough desire, direction, strategies, and motivational tools, you'll achieve the results and success you've always been looking for.</p>"+
             "<p class='mt-2 fs-6 fw-medium'>What do you want?</p>"+
             "<p class='mt-2 fs-6 fw-medium'>How can you get it?</p>"+
             "<p class='mt-2 fs-6 fw-medium'>Find the Secret to Happiness!</p>"+
             "<p class='mt-2 fs-6 fw-medium'>Learn to cope with anything!</p>"+
             "<p class='mt-2 fs-6 fw-medium'>Come. Read this transformational book. DO BETTER! And BE BETTER!</p>"
            }
            else if (imageSrc.includes("Body in the Tower")) {
            buttonInfo = [
            
            { label: "Amazon", link: "https://books.apple.com/us/book/body-in-the-tower/id1339075588 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Mark_Reasoner_Body_in_the_Tower?id=7xZIDwAAQBAJ" },
                { label: "eBooks2go", link: "https://www.ebooks2go.com/body-in-the-tower" },
                { label: "kobo", link: "https://www.kobo.com/us/en/ebook/body-in-the-tower" },
        ];
        description ="What could possibly go wrong when twelve-year-olds, Corey Palmer and Michelle Pritchard, have too much time to kill on a hot summer day? With these two, a lot, since they have a knack for getting into places they don't belong, exposing secrets, and finding dead bodies. While exploring the courthouse, they get stuck in the clock tower where they discover the body of a young man who also got stuck over fifty years earlier. They'll end up spending much of what's left of their summer vacation trying to find out who the young man was, how he died, and why no one ever found him until now. Along the way, they'll put their friendship at risk, uncover some not-so-pleasant facts about their hometown, and learn a lesson or two about history."}
            
            else if (imageSrc.includes("Body in the Lake")) {
            buttonInfo = [
            
            { label: "Apple", link: " https://books.apple.com/us/book/body-in-the-lake/id1339066794 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Mark_Reasoner_Body_in_the_Lake?id=rRZIDwAAQBAJ" },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/body-in-the-lake" },
                { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/body-in-the-lake-1" },
        ];
        description ="Another year and another mystery for Corey Palmer and Michelle Pritchard as they once more get into places they shouldn't and discover the body of someone long forgotten at the bottom of Lake Cyrus."+
             "<p class=''>Wanting just one more summer-like afternoon up at the lake, Corey and Michelle find the water drained and lots of mud, debris and other things to crawl over and around. They stumble onto a sunken rowboat covering a man's body. Not wanting to be in trouble with the authorities again, they call for help and soon the lake is crawling with firefighters, sheriff's deputies and the medical examiner's team. The body is recovered and the investigation is on.Told to stay out of things, Corey and Michelle do nothing of the kind. And they have their own mystery to solve, trying to find out about a second discovery from the lake's muddy bottom, a US Naval Academy class ring from 1965.</p>"+
             "<p class=''>It's not just finding answers for the kids as life and eighth grade take up most of their time. The lead up to a school dance forces Corey to learn some hard lessons about how women should be treated and what happens when a young man completely misses clues from the fairer sex. He'll work through it with help from his mother and Judge Danielson, and Michelle will forgive him and they'll go to the dance together.</p>"+
             "<p class=''>Michelle will face her own problems. As she grows into a beautiful young woman, she'll face harassment from older boys and an incident where she's touched inappropriately. She'll navigate these in convincing style with and without Corey's help.</p>"+
             "<p class=''>While working on the ring, Corey and Michelle join Officer Brenda Shelton to trace leads and find new information. Their efforts uncover a person who came through the area about fifty years ago and then disappeared. This man wasn't a good person and ended up in a lot of trouble finally being tried for raping the young woman who became Sheriff Wingate's mother.Everything comes together over the Thanksgiving Holiday when the kids are lured into a confrontation with last person involved in the dead man's disappearance. They barely make it out alive, thanks to some quick thinking and good luck, and learn the true story of when and how the man ended up at the bottom of Lake Cyrus. They also find out who he was and the connection to Sheriff Wingate.</p>"
            }   
            else if (imageSrc.includes("The Dream Walker")) {
            buttonInfo = [
            
            { label: "Apple", link: "https://books.apple.com/us/book/the-dream-walker-land-of-mystica-series-volume-1/id1453144059 " },
                { label: "Google Play", link: "https://play.google.com/store/books/details/Michelle_Murray_The_Dream_Walker_Land_of_Mystica_S?id=Uh2IDwAAQBAJ" },
                { label: "eBooks2go", link: " https://www.ebooks2go.com/the-dream-walker-land-of-mystica-series-volume-1" },
                { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/the-dream-walker-land-of-mystica-series-volume-1 " },
        ];
        description ="Miranda is having vivid dreams of a world she's never been to. A world full of castles, Forests, Ice Caves, and Dragons. She goes to a bookstore to see about these dreams, and discovers she is a Dream Walker. She has been called to save this mystical, magical world. On Mystica, the evil wizard Midnight has been released. Midnight is gathering an army, and preparing for war. Miranda needs to find and release the white wizard Lightning from his stone prison to save Mystica. Follow Miranda as she travels through Mystica. Can she find and release Lightning and save Mystica?"
            }   
            else if (imageSrc.includes("The Sins of Mrs.Ema")) {
            buttonInfo = [
            
            { label: "Amazon", link: " https://www.amazon.com/Sins-Mrs-Ema-Mirela-Kanini/dp/1545754713 " },
            { label: "Apple", link: "https://books.apple.com/us/book/the-sins-of-mrs-ema/id1601184257?ls=1" },
            { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/the-sins-of-mrs-ema-mirela-kanini/1140811367?ean=9781545754719 " },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Mirela_Kanini_The_Sins_of_Mrs_Ema?id=aalVEAAAQBAJ" },
            { label: "eBooks2go", link: "https://www.ebooks2go.com/the-sins-of-mrs-ema " },
            { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/the-sins-of-mrs-ema" },
        ];
        description ="The Sins of Mrs. Ema is a provocative novel by author Mirela Kanini about true happiness in life. Is it money or love?"+
             "<p class=''>How do we balance having a devoted husband and then finding the right person at the wrong time?</p>"+
              "<p class='fs-6'>How far will we go for love?</p>"+
             "<p class=''>Ema seems to have it all. She is a successful psychologist, married to a businessman, and lives in a mansion in a desirable neighborhood. She has everything one could want, from luxury cars, to a vacation home, to trips to the most exotic places. Her marriage has lost its passion and is dulled by routine. But one business trip to her hometown changes everything. Her life shifts from a quiet, suburban one to a passionately dangerous one. She meets Toni, the love of her life. She risks everything she has to follow her heart. She is caught between the man who cares about her and the man she truly loves. What if she loses it all at the end?</p>"+
             "<p class='fs-6'>Unpredictable, heartbreaking!</p>"+
             "<p class='fs-6'>An affair to remember!</p>"+
             "<p class='fs-6'>This is a brilliant psychological romance!</p>"+
             "<p class='mt-2 fs-5 fw-medium'>Praise and Editorial Reviews</p>"+
             "<p class=''>“It is impossible to put this book down once you start it! Excellent read, 5 stars from me!” <span class='fw-medium fst-italic'> — Angi's Books </span> </p>"+
             "<p class=''>“The Sins of Mrs. Ema, by Mirela Kanini, is an introspective and dramatic romance story, but also a wide-ranging vibrant character study.” <span class='fw-medium fst-italic'> — ManyBooks </span> </p>"}
            
            
            else if (imageSrc.includes("But First Dream Bigger")) {
            buttonInfo = [
            
            { label: "Amazon", link: "https://www.amazon.com/But-First-Dream-Bigger-Potential/dp/1545756740" },
            { label: "Apple", link: "https://books.apple.com/us/book/but-first-dream-bigger/id6450740783 " },
        { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/but-first-dream-bigger-nadia-mau-bernardy/1143786512?ean=9781545756744 " },
        { label: "Google Play", link: "https://play.google.com/store/books/details/Nadia_Mau_Bernardy_But_First_Dream_Bigger?id=8fjHEAAAQBAJ " },
        { label: "eBooks2go", link: "https://www.ebooks2go.com/but-first-dream-bigger" },
        { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/but-first-dream-bigger" },
        ];
        description ="But First, Dream Bigger is an invitation for you to take action on the dream that has been tapping you on the shoulder. This intuitive 21-day guide will take you from feeling called to start to giving you powerful insights to move you forward. Throughout the book, Nadia Mau Bernardy will share how she was able to manifest her dream life, career, relationship, and family in Hawaii based on a goal she set when she was 16 years old."+
             "<p class=''>After suffering from burnout in 2017, she started down a spiritual path which led her to uncovering her soul calling as a life coach and business mentor. Throughout the 21 days, you will discover spiritual and personal growth tools to help you connect to your true calling and potential.</p>"}
             
            else if (imageSrc.includes("Adventures in Seeking Knowledge")) {
            buttonInfo = [
            
            { label: "Amazon", link: " https://www.amazon.com/Adventures-Seeking-Knowledge-Rose-Hale/dp/154574808X " },
            { label: "Apple", link: " https://books.apple.com/us/book/adventures-in-seeking-knowledge/id1511708771" },
            { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/adventures-in-seeking-knowledge-rose-hale/1134010261?ean=9781545748084 " },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Rose_Hale_Adventures_in_Seeking_Knowledge?id=97beDwAAQBAJ" },
            { label: "eBooks2go", link: "https://www.ebooks2go.com/adventures-in-seeking-knowledge" },
            { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/adventures-in-seeking-knowledge " },
        ];
        description ="Adventures of Seeking Knowledge is a book that represents my experiences of God's grace in my life through good times and bad times. This personal manuscript reveals to the readers that moment when God became very real and active in my heart and my life. This collection of stories is a visual way for me to share about my encounters of God's faithfulness. My goals are to encourage you and provide moments of laughter along the way."+
             "<p class=''> God won't ask everyone to write a book, compose a song, or create artwork in order to tell what He has done in your life. But we're all asked to share in some way about God's grace, love and faithfulness in our lives. Thank you for the privilege of sharing my testimony with you. Luke 1:49 “For the Mighty One has done great things for me; and Holy is His name.” </p>"}
             
            else if (imageSrc.includes("Lead with Love")) {
            buttonInfo = [
            
            { label: "Amazon", link: "https://www.amazon.com/Lead-Love-Stephen-Juracka-Ed/dp/1545755337" },
            { label: "Apple", link: " https://books.apple.com/us/book/lead-with-love/id6442975190" },
            { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/lead-with-love-stephen-juracka-ed-d/1141685128?ean=9781545755334" },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Stephen_Juracka_Ed_D_Lead_with_Love?id=RYp0EAAAQBAJ" },
            { label: "eBooks2go", link: "https://www.ebooks2go.com/lead-with-love" },
            { label: "Kobo", link: " https://www.kobo.com/us/en/ebook/lead-with-love-3"},
        ];
        description ="Leaders hold enormous influence over the culture, the environment and the processes that fuel every home, business, and community organization. Let there be no mistake, leadership is the linchpin for organizational success and effectiveness."+
             "<p class=''>If you have witnessed leadership that lacks high mindedness and direction and strive to be a leader armed with a framework for organizational success, Lead with Love offers a direct and succinct guide to principled leadership. This book is steeped in the research behind positive psychology and covers the importance of personal well-being when managing a leadership role. Further, Lead with Love explores the heart and science behind creating an organizational environment that is people focused and intentionally designed for success.</p>"
             "<p class=''>Dr. Stephen Juracka has served as an educational leader for over 20 years and his writing is grounded in the research behind effective leadership and organizational design. If you care deeply about the quality of your own life as a leader and want to share that care with the people you lead, then you are ready to Lead with Love</p>"}
             
            
            else if (imageSrc.includes("Get In The Sales Game")) {
            buttonInfo = [
            
            { label: "Amazon", link: " https://www.amazon.com/Get-Sales-Game-Playbook-Winning/dp/1545754322             " },
            { label: "Apple", link: "https://books.apple.com/us/book/get-in-the-sales-game-the-playbook-for-winning-in/id1585608289" },
            { label: "Barnes & Noble", link: "https://www.barnesandnoble.com/w/get-in-the-sales-game-sweet-sue-kouchis/1140157211?ean=9781545754320" },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Sweet_Sue_Kouchis_Get_in_the_Sales_Game_The_Playbo?id=jJdCEAAAQBAJ" },
            { label: "eBooks2go", link: " https://www.ebooks2go.com/get-in-the-sales-game " },
            { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/get-in-the-sales-game-the-playbook-for-winning-in-sales-when-the-game-has-changed " },
        ];
        description ="Get in the Sales Game is a groundbreaking one-of-a-kind sales book that can help you close more business. It talks about tips and tricks in selling in the new sales environment. March 2020 was a pivotal moment of new change in the world of sales. With so many countries and states shut down by stay-at-home orders, our normal way of sales-life was rocked to its very core. Sales professionals who used face-to-face, handshake, ground game, and give-a-hug styles of selling had to power pivot to stay in the game."+
        "<p class='mt-2 fs-5 fw-medium'>Awards & Accolades <i class='fa-solid fa-award  fs-5'></i></p>"+
            "<p class='mt-2'>Amazon Bestseller February 2022</p>"}
           
            else if (imageSrc.includes("All That I Am Now That I Know")) {
            buttonInfo = [
            
            { label: "Amazon", link: "https://www.amazon.com/All-That-Am-Entrepreneurs-Dreaming/dp/179903576X" },
            { label: "Apple", link: "https://books.apple.com/us/book/all-that-i-am-now-that-i-know/id1500523908" },
            { label: "Google Play", link: "https://play.google.com/store/books/details/Teresa_Spangler_All_That_I_Am_Now_That_I_Know?id=yajSDwAAQBAJ" },
            { label: "eBooks2go", link: "https://www.ebooks2go.com/all-that-i-am-now-that-i-know" },
        ];
        description =
        "<p class=''>“A woman’s journey as an entrepreneur not to be missed!” <span class='fw-bold fst-italic'> — J.Larsson</span> </p>"+
             "<p class='fw-bold'>This is not only a book about my successes and failures, but a book to provide you with powerful strategies and exercises that will guide you through your personal journey on the road to achieving big dreams!</p>"+
              "<p class=''>I'm what you would call a 'challenge junkie'. Others have challenged me all my life. “Ain’t no woman made it yet in this business and you won't either!” they said to me.</p>"+
             "<p class=''>I took that challenge and beat out 240 men to become the #1 saleswoman in that company. In the early '90s, Venture Capitalists simply did not fund women in technology. I accepted that challenge and went on to fund a startup that grew from $23 million in revenue to $400 million in less than five years.</p>"+
             "<p class=''> <span class='fw-bold'>Now I am a member of the Forbes Technology Council.</span>I am the mastermind behind the GameDay Decisions Analytics Platform™, an integrated artificial intelligence and machine-learning platform as a service to “Simplify the Art and Science of Decision Making.”</p>"+
             "<p class=''>Before the #Metoo movement began, I was overcoming groping company founders and went on to co-developed one of the first Linux Software driven web serving appliances. I've held executive positions at Red Hat Software and was responsible for leading revenue growth pre and post IPO. In addition, I have founded and led a number of entrepreneurial organizations through growth milestones including venture capital funding, IPOs, innovation consultancy, and technical services company.</p>"+
             "<p class=''> <span class='fw-bold'>I grew from rags to riches, making millions and then watched it all disappear.</span>Then I re-invented myself and made my lifelong dream happen, founding a philanthropic performing arts organization, which created showcase opportunities for more than 200+ original artists and musicians over 7 years that captured the attention of New York dance communities and globally known musicians.</p>"+
             "<p class='fw-bold'>I have pulled from my successes and failures to provide powerful strategies and exercises that will guide you through your personal journey on the road to achieving big dreams, whether that be in love, life, in the business world, creating wealth, or merely gaining that inner peace we are all searching for.</p>"+
             "<p class=''>Teresa Spangler has been a driving force behind, digital transformation, innovation, and growth. Today, she wears multiple hats including social entrepreneur, innovation expert, growth strategist, author and speaker (not to mention mother, wife, band-leader and so much more).</p>"+
             "<p class=''>She is especially passionate about women, and entrepreneurs helping them to gain their footing toward successful and thriving growth. She is the CEO of Plazabridge Group, a distinguished member of the Forbes Technology Council, advisor to countless entrepreneurs and mentor to growth-minded individuals. Ask her about her band, The Headless Chickens for a good laugh and lessons on patience and perseverance.</p>"}
            
           
            else if (imageSrc.includes("The Local Legend of Iron River")) {
            buttonInfo = [
            
            { label: "Amazon", link: " https://www.amazon.com/Local-Legend-Iron-River-Liam/dp/1545756716 " },
            { label: "Apple", link: " http://books.apple.com/us/book/id6449461095" },    
            { label: "eBooks2go", link: "https://www.ebooks2go.com/the-local-legend-of-iron-river" },
            { label: "Kobo", link: "https://www.kobo.com/us/en/ebook/the-local-legend-of-iron-river" },
        ];
        description ="Liam, a 10-year-old boy, and Boo, an 8-year-old girl, are two kids from Chicago, Illinois sleeping comfortably in their family’s vacation home in Iron River, Michigan. Their vacation home, far from the big city lights and crowded, bustling streets, borders the Ottawa National Forest and rests peacefully a few yards away from the vibrant waters of Sunset Valley Lake. Tonight, the cool air from the lake mixes with the heat of the day and creates a dense fog while the Sturgeon Moon rises in the twilight."+
        "<p class=''>Suddenly, Liam is startled by a chilling howl outside his bedroom window. That’s when Liam sees the beast for the first time. Its terrifying yellow eyes pierce back at him through the darkness.</p>"+
            "<p class='mt-2'>Liam tries to warn his family of what’s out there, but no one believes him. His father assures him that it’s his imagination and the forest is home to black bears and grey wolves. But is the forest and this small summer town harboring a primal evil? How long has this evil plagued this area? Who else is aware of what lurks in the surrounding woods? And how can this beast be stopped before anyone else goes missing? Only Liam, Boo, and their crew of friends can solve this mystery. Follow Liam and Boo in the first installment of the Liam and Boo series, which features our main characters in a thrilling and mysterious adventure.</p>"+
            "<p class='mt-2 fs-5 fw-medium'>Editorial Reviews </p>"+
            "<p class=''>“The Local Legend of Iron River is a great start to the series and will quickly draw readers into its suspenseful tale. If this first novel is anything to go by, then readers are in for a treat when it comes to the future adventures of Liam and Boo.” <span class='fw-bold fst-italic'> — ManyBooks</span> </p>"+
            "<p class=''>“The Local Legend of Iron River is an engaging story. The last few chapters are especially nail-biting as the author doesn't pull any punches regarding casualties.” <span class='fw-bold fst-italic'> — ManyBooks</span> </p>"+
            "<p class='mt-2 fs-5 fw-medium'>Awards & Accolades<i class='fa-solid fa-award  fs-5'></i></p>"+
            "<p class='mt-2'>Amazon Hot New Release June 2023</p>"+
            "<p class='mt-2'>Named One of Bookstr’s 8 Underrated Werewolf Novels of 2023</p>"
        
        }
            else if (imageSrc.includes("The Echoes of The Elk's Estate")) {
            buttonInfo = [
            
                { label:"Amazon", link: " https://www.amazon.com/Echoes-Elks-Estate-Liam-Boo/dp/1545757356  " },
                { label:"Barnes & Noble", link: "https://www.barnesandnoble.com/w/the-echoes-of-the-elks-estate-william-mierzejewski/1145114630?ean=9781545757352 " },
               

        ];
        description ="One year has passed since the events in Iron River, Michigan and it’s time for another summer vacation! Liam, Boo and the rest of the family have recovered from previous traumatic events in their own way. To distance themselves from former occurrences, Will and Annie (Liam and Boo’s parents) decide to take a road trip to the sleeping community of Doylestown, Pennsylvania. This is the hometown of Claire, Will’s sister. A beautiful and quiet colonial borough located not far from the City of Philadelphia. What could possibly go wrong?"+
        "<p class=''>Will plans to give his family a tour of his hometown. Enjoy the sights and aid his sister with a project that was very dear to his childhood, the restoration of the Elk’s Family Estate. Is there an inherent evil trying to lure everyone into a trap? Luckily, this is where Liam, Boo and their family and friends shine best. Working together, solving a mystery and battling monsters who harbor the forces of darkness. Will Liam and Boo be able to solve this mystery? Follow the signs and our crew of young people as they try to survive the ghastly pursuits! Happy reading.</p>"
            
        
        }
            
       
       
            descriptionContainer.innerHTML = `<p>${description}</p>`;

        // Generate HTML for buttons
        const buttonsHTML = buttonInfo.map(button => `<a href="${button.link}">${button.label}</a>`).join('');

        // Set the HTML content of the buttons div
        buttonsContainer.innerHTML = buttonsHTML;
    }
   
});

AOS.init({
    once: true
});