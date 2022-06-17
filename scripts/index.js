var getData = async () => {
    // let todayDate = new Date().toISOString().split("T")[0];
  
    // let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=7262b1f4a1db43dcaf93474f49f4a0c7`);
    let res = {
      status: "ok",
      totalResults: 1241,
      articles: [
        {
          source: { id: "news24", name: "News24" },
          author: "Jason Felix",
          title:
            "News24.com | ‘Ramaphosa has something to hide’: Steenhuisen calls on president to come clean on Phala Phala theft",
          description:
            "While President Cyril Ramaphosa had the country locked down in June 2020, leaving millions unable to earn a living, he was using taxpayer money to pursue the thieves who stole US dollars from his Limpopo game farm, says DA leader John Steenhuisen.",
          url: "https://www.news24.com/news24/SouthAfrica/News/ramaphosa-has-something-to-hide-steenhuisen-calls-on-president-to-come-clean-on-phala-phala-theft-20220617",
          urlToImage:
            "https://cdn.24.co.za/files/Cms/General/d/3093/8f593706cf9e465bb97f194688775403.jpg",
          publishedAt: "2022-06-17T12:36:27Z",
          content:
            "<ul><li>DA leader John Steenhuisen says the outcry over the theft at President Cyril Ramaphosa’s game farm is embarrassing the country.</li><li>He has called on the president to come clean on the mat… [+3806 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "SBA Announces Two Executive Officer Retirements and Appointments",
          description:
            "BOCA RATON, Fla.--(BUSINESS WIRE)--SBA Communications Corporation (NASDAQ: SBAC) (“SBA”) today announced that Kurt L. Bagwell, Executive Vice President and President – International, and Thomas P. Hunt, Executive Vice President, Chief Administrative Officer a…",
          url: "https://www.businesswire.com/news/home/20220617005248/en/SBA-Announces-Two-Executive-Officer-Retirements-and-Appointments",
          urlToImage: "http://www.businesswire.com/images/bwlogo_square.png",
          publishedAt: "2022-06-17T12:35:56Z",
          content:
            "BOCA RATON, Fla.--(BUSINESS WIRE)--SBA Communications Corporation (NASDAQ: SBAC) (SBA) today announced that Kurt L. Bagwell, Executive Vice President and President International, and Thomas P. Hunt, … [+5563 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title: "Sonendo, Inc. Announces Executive Management Team Changes",
          description:
            "LAGUNA HILLS, Calif.--(BUSINESS WIRE)--Sonendo, Inc. (NYSE: SONX), a leading dental technology company and developer of the GentleWave® System, today announced two upcoming departures from its executive management team. Jacqueline Collins, vice president, gen…",
          url: "https://www.businesswire.com/news/home/20220617005062/en/Sonendo-Inc.-Announces-Executive-Management-Team-Changes",
          urlToImage: "http://www.businesswire.com/images/bwlogo_square.png",
          publishedAt: "2022-06-17T12:35:56Z",
          content:
            "LAGUNA HILLS, Calif.--(BUSINESS WIRE)--Sonendo, Inc. (NYSE: SONX), a leading dental technology company and developer of the GentleWave® System, today announced two upcoming departures from its execut… [+3675 chars]",
        },
        {
          source: { id: null, name: "Terradaily.com" },
          author: null,
          title: "NASA, ESA finalize agreements on climate, 1 cooperation",
          description:
            "Noordwijk, Netherlands (SPX) Jun 16, 2022\n\n\nNASA Administrator Bill Nelson and ESA Director General Josef Aschbacher signed two agreements Wednesday at the ESA Council meeting in Noordwijk, Netherlands, further advancing the space agencies' cooperation on Ear…",
          url: "https://www.terradaily.com/reports/NASA_ESA_finalize_agreements_on_climate_Artemis_cooperation_999.html",
          urlToImage:
            "https://www.spxdaily.com/images-hg/josef-aschbacher-bill-nelson-hg.jpg",
          publishedAt: "2022-06-17T12:35:55Z",
          content:
            "NASA Administrator Bill Nelson and ESA Director General Josef Aschbacher signed two agreements Wednesday at the ESA Council meeting in Noordwijk, Netherlands, further advancing the space agencies' co… [+4704 chars]",
        },
        {
          source: { id: null, name: "Space Daily" },
          author: null,
          title: "NASA, ESA discuss sending first European to Moon",
          description:
            "Paris (AFP) June 15, 2022\n\n\n The European Space Agency and NASA on Wednesday talked up the prospect of putting the first European on the Moon, as they signed a deal strengthening collaboration for future lunar exploration. \n\nThe space agencies had already agr…",
          url: "https://www.spacedaily.com/reports/NASA_ESA_discuss_sending_first_European_to_Moon_999.html",
          urlToImage:
            "https://www.spxdaily.com/images-hg/airbus-esa-lunar-lander-rover-astronauts-hg.jpg",
          publishedAt: "2022-06-17T12:35:55Z",
          content:
            "The European Space Agency and NASA on Wednesday talked up the prospect of putting the first European on the Moon, as they signed a deal strengthening collaboration for future lunar exploration.\r\nThe … [+3265 chars]",
        },
        {
          source: { id: null, name: "Www.gov.uk" },
          author: "Environment Agency",
          title: "New website launched to capture Severn Valley flood data",
          description:
            "The Environment Agency has launched a new crowd reporter website to enable Severn Valley residents to share details of flooding in their communities.",
          url: "https://www.gov.uk/government/news/new-website-launched-to-capture-severn-valley-flood-data",
          urlToImage:
            "https://assets.publishing.service.gov.uk/media/62ac53d1d3bf7f0af64806ad/river-severngov.jpg",
          publishedAt: "2022-06-17T12:35:15Z",
          content:
            "The Severn Valley Water Management Scheme (SVWMS) Crowd Reporter is a crowd-sourced mapping tool which can be used to submit descriptions and pictures of localised flooding.\r\nResidents are encouraged… [+1744 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title: "ASA Launches New Global Branding Initiative",
          description:
            'HERNDON, Va. , June 17, 2022 /PRNewswire/ -- ASA has officially launched a new global initiative to update its corporate branding. Efforts include a change in public reference of the organization\'s name from the American Society of Appraisers to "ASA"; an upd…',
          url: "https://www.prnewswire.com/news-releases/asa-launches-new-global-branding-initiative-301569707.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1841678/ASA_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T12:34:00Z",
          content:
            "HERNDON, Va. , June 17, 2022 /PRNewswire/ -- ASA has officially launched a new global initiative to update its corporate branding. Efforts include a change in public reference of the organization's n… [+3074 chars]",
        },
        {
          source: { id: null, name: "WhatsOnStage.com" },
          author: "WhatsOnStage (UK)",
          title:
            "There’s Going To Be A Big Immersive Theatre Under Waterloo Station In London",
          description:
            "The venue, called Labyrinth, was conceived by the creative directors of the immersive theatre company Les Enfants Terribles and will open in November with a revival of their hit adaptation of Alice’s Adventures Underground (Lewis Carroll’s manuscript title fo…",
          url: "https://www.whatsonstage.com/london-theatre/news/immersive-venue-labyrinth-alice-adventure_56735.html",
          urlToImage:
            "https://www.whatsonstage.com/dyn/photos/whatsonstage/v1finw1200x0y0w1200h675/the-labyrinth-151954.jpg",
          publishedAt: "2022-06-17T12:33:00Z",
          content:
            "Four years in the making, immersive venue Labyrinth will open in Waterloo in a few months' time. \r\nThe brainchild of Les Enfants Terribles' creative directors Oliver Lansley and James Seager and prod… [+710 chars]",
        },
        {
          source: { id: null, name: "Roanoke Times" },
          author: "By ANNE D'INNOCENZIO, AP Retail Writer",
          title: "T-shirts? Ice cream? Retailers cash in on Juneteenth",
          description:
            "Many retailers are getting backlash on social media for what critics say undermines the day.",
          url: "https://roanoke.com/news/national/t-shirts-ice-cream-retailers-cash-in-on-juneteenth/article_a2b1fc97-7f47-5542-95e4-bf97d8060036.html",
          urlToImage:
            "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/a/2b/a2b1fc97-7f47-5542-95e4-bf97d8060036/62ac65e19dd6d.preview.jpg?crop=1919%2C1007%2C0%2C36&resize=1200%2C630&order=crop%2Cresize",
          publishedAt: "2022-06-17T12:30:00Z",
          content:
            "NEW YORK (AP) Retailers and marketers have been quick to commemorate Juneteenth with an avalanche of merchandise from ice cream to T-shirts to party cups.\r\nBut many are getting backlash on social med… [+15262 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "Defense Metals Diamond Drilling Update - Pit Slope Geotechnical Preparations Underway",
          description:
            'VANCOUVER, BC, June 17, 2022 /PRNewswire/ - Defense Metals Corp. ("Defense Metals" or the "Company") (TSX-V: DEFN) (OTCQB: DFMTF) (FSE: 35D) is pleased to provide an update for ongoing diamond drilling at its Wicheeda Rare Earth Element (REE) deposit. The 202…',
          url: "https://www.prnewswire.com/news-releases/defense-metals-diamond-drilling-update---pit-slope-geotechnical-preparations-underway-301570242.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1842111/Defense_Metals_Corp__Defense_Metals_Diamond_Drilling_Update%C2%A0Pit.jpg?p=facebook",
          publishedAt: "2022-06-17T12:30:00Z",
          content:
            "The initial two drill holes were collared from the same site oriented southwest at -50 and -60 degree dips. The holes are designed to establish the eastern carbonatite contact near surface, and for t… [+9191 chars]",
        },
        {
          source: { id: null, name: "Forbes" },
          author:
            "Hussein Cholkamy, Forbes Councils Member, \n Hussein Cholkamy, Forbes Councils Member\n https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/people/husseincholkamy/",
          title:
            "The Data-Driving Construction Of New Data Centers And How To Become A Player",
          description:
            "As the need for data centers has gone up, the availability of them has only gone down amid higher need to be built.",
          url: "https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2022/06/17/the-data-driving-construction-of-new-data-centers-and-how-to-become-a-player/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve//62ab9dbe6a5289533bf2b688/0x0.jpg?format=jpg&width=1200",
          publishedAt: "2022-06-17T12:30:00Z",
          content:
            "As a Co-founder and COO at Eyrus, Hussein brings over 20 years of global experience in real estate development, construction and design. \r\ngetty\r\nAs the world gets smaller, information moves faster a… [+6404 chars]",
        },
        {
          source: { id: null, name: "Bloody Elbow" },
          author: "Roxanne Modafferi",
          title:
            "Dear Roxy: ‘How do you channel your inner warrior’ and overcome doubt?",
          description:
            "Roxanne Modafferi tackles your questions, Happy Warrior style, in her ‘Dear Roxy’ column for Bloody Elbow.",
          url: "https://www.bloodyelbow.com/2022/6/17/23171031/dear-roxy-3",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/g_h1Yh8z19EMy89Dcc913e7jB8I=/0x487:4980x3094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23633808/1370225567.jpg",
          publishedAt: "2022-06-17T12:30:00Z",
          content:
            "Roxanne Modafferi lands a jab on Casey O’Neill at UFC 271. | Photo by Josh Hedges/Zuffa LLC\r\n\n \n\n Roxanne Modafferi tackles your questions, Happy Warrior style, in her ‘Dear Roxy’ column for Bloody E… [+5569 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "Outlook on the Synthetic Biology: DNA Cloning Global Market to 2035 - Industry Trends and Forecasts",
          description:
            'DUBLIN, June 17, 2022 /PRNewswire/ -- The "Synthetic Biology: DNA Cloning Market by Type of Cloning Method, End-Users and Key Geographical Regions: Industry Trends and Global Forecasts, 2022-2035" report has been added to ResearchAndMarkets.com\'s offering. Th…',
          url: "https://www.prnewswire.com/news-releases/outlook-on-the-synthetic-biology-dna-cloning-global-market-to-2035---industry-trends-and-forecasts-301570238.html",
          urlToImage:
            "https://mma.prnewswire.com/media/539438/Research_and_Markets_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T12:30:00Z",
          content:
            'DUBLIN, June 17, 2022 /PRNewswire/ -- The "Synthetic Biology: DNA Cloning Market by Type of Cloning Method, End-Users and Key Geographical Regions: Industry Trends and Global Forecasts, 2022-2035" re… [+12261 chars]',
        },
        {
          source: { id: null, name: "National Observer" },
          author: "Frank Jordans",
          title: "Rich nations balk at climate aid to poor countries at UN talks",
          description:
            "Rich countries including the European Union and the United States have pushed back against efforts to put financial help for poor nations suffering the devastating effects of global warming firmly on the agenda for this year’s U.N. climate summit.",
          url: "https://www.nationalobserver.com/2022/06/17/news/rich-nations-balk-climate-aid-poor-countries-un-talks",
          urlToImage:
            "https://www.nationalobserver.com/sites/nationalobserver.com/files/img/2022/06/17/20220616080616-62ab1f8b8611f2159da8a47ejpeg.jpeg",
          publishedAt: "2022-06-17T12:29:10Z",
          content:
            "Rich countries including the European Union and the United States have pushed back against efforts to put financial help for poor nations suffering the devastating effects of global warming firmly on… [+3142 chars]",
        },
        {
          source: { id: "independent", name: "Independent" },
          author: "Alex Woodward",
          title: "What is Juneteenth and why is it a holiday?",
          description:
            "Thousands of enslaved people in Texas were ordered free two years after Emancipation Proclamation",
          url: "https://www.independent.co.uk/news/world/americas/juneteenth-holiday-what-why-when-b2103461.html",
          urlToImage:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/11/18/juneteenth-2019.jpg?quality=75&width=1200&auto=webp",
          publishedAt: "2022-06-17T12:28:31Z",
          content:
            "Celebrated annually on 19 June across the US, Juneteenth commemorates the announcement of the abolition of slavery in Texas and the nations second Independence Day.\r\nJuneteenth which was recognised a… [+6620 chars]",
        },
        {
          source: { id: null, name: "Freerepublic.com" },
          author: "American Minute",
          title:
            "Roger Sherman, and the importance of Gold & Silver - American Minute with Bill Federer",
          description:
            "He was the only person to sign all four of these America's founding documents: Articles of Association, 1774; Declaration of Independence, 1776; Articles of Confederation, 1777; U.S. Constitution, 1787. Download as PDF ... Who was he? Roger Sherman. At age 19…",
          url: "https://freerepublic.com/focus/f-chat/4071760/posts",
          urlToImage: null,
          publishedAt: "2022-06-17T12:24:05Z",
          content:
            "Skip to comments.\r\nRoger Sherman, and the importance of Gold &amp; Silver - American Minute with Bill FedererAmerican Minute ^\r\n | June 16, 2022\r\n | Bill Federer\r\nPosted on 06/17/2022 5:24:05 AM PDT … [+3229 chars]",
        },
        {
          source: { id: null, name: "Politicalwire.com" },
          author: "Taegan Goddard",
          title: "Paxton Suggests Mass Shooting Was Part of God’s Plan",
          description:
            'Texas Attorney General Ken Paxton (R) "made another in a string of tone deaf media appearances in the wake of the Uvalde, Texas school shooting," this time telling a conservative radio host that while it’s difficult for him to offer comfort to the parents of …',
          url: "https://politicalwire.com/2022/06/17/paxton-suggests-mass-shooting-was-part-of-gods-plan/",
          urlToImage:
            "https://politicalwire.com/wp-content/uploads/2018/02/PW-podcast-logo.jpg",
          publishedAt: "2022-06-17T12:22:59Z",
          content:
            "“There are a lot of blogs and news sites claiming to understand politics, but only a few actually do. Political Wire is one of them.”\r\n Chuck Todd, host of “Meet the Press”\r\n“Concise. Relevant. To th… [+594 chars]",
        },
        {
          source: { id: null, name: "VOA News" },
          author: "webdesk@voanews.com (Associated Press)",
          title: "WTO Ministers Reach Deals on Fisheries, Food, COVID Vaccines",
          description:
            "After all-night talks, members of the World Trade Organization early Friday reached a string of deals and commitments aimed at limiting overfishing, broadening production of COVID-19 vaccines in the developing world, improving food security and reforming a 27…",
          url: "https://www.voanews.com/a/wto-ministers-reach-deals-on-fisheries-food-covid-vaccines/6621479.html",
          urlToImage:
            "https://gdb.voanews.com/09470000-0a00-0242-adf9-08da4cb8713a_w1200_r1.jpg",
          publishedAt: "2022-06-17T12:22:32Z",
          content:
            "GENEVA  After all-night talks, members of the World Trade Organization early Friday reached a string of deals and commitments aimed at limiting overfishing, broadening production of COVID-19 vaccines… [+4799 chars]",
        },
        {
          source: { id: null, name: "Crikey" },
          author: "AAP",
          title: "Govt responds to Assange extradition call",
          description:
            "The federal government has responded to the United Kingdom's decision that the extradition of Julian Assange to the United States can proceed.\nThe post Govt responds to Assange extradition call appeared first on Crikey.",
          url: "https://www.crikey.com.au/2022/06/17/govt-responds-to-assange-extradition-call/",
          urlToImage:
            "https://www.crikey.com.au/wp-content/uploads/2022/06/d49dd08f-34b1-4b42-bb57-09bb3c477e8c.jpg",
          publishedAt: "2022-06-17T12:22:27Z",
          content:
            "The federal government says it will continue to offer consular assistance to Wikileaks founder Julian Assange after the United Kingdom’s decision that his extradition to the United States can proceed… [+1521 chars]",
        },
        {
          source: { id: null, name: "Independent.ie" },
          author: "Jill Lawless",
          title:
            "UK orders extradition of WikiLeaks founder Julian Assange to US where he could face 175 year prison sentence",
          description:
            "The British government has ordered the extradition of WikiLeaks founder Julian Assange to the United States to face spying charges — a milestone, but not the end of the decade-long legal saga.",
          url: "https://www.independent.ie/world-news/europe/britain/uk-orders-extradition-of-wikileaks-founder-julian-assange-to-us-where-he-could-face-175-year-prison-sentence-41763406.html",
          urlToImage:
            "https://www.independent.ie/world-news/europe/britain/71c3b/41763402.ece/AUTOCROP/w1240h700/LEGAL",
          publishedAt: "2022-06-17T12:21:07Z",
          content:
            "The British government has ordered the extradition of WikiLeaks founder Julian Assange to the United States to face spying charges a milestone, but not the end of the decade-long legal saga.\r\nWikiLea… [+3835 chars]",
        },
      ],
    };
    console.log(res.articles);
  
    append_1(res.articles);
    append_minidiv_2(res.articles);
  
    append_2(res.articles);
    append_3(res.articles);
  };
  
  getData();
  
  function getData2(query) {
    let data = {
      status: "ok",
      totalResults: 159,
      articles: [
        {
          source: { id: null, name: "The Points Guy" },
          author: "Christine Gallipeau",
          title:
            "I slept in the hotel room tied to the Watergate break-in — here’s what it’s like 50 years later",
          description:
            "In a city full of historical buildings, it takes a lot to stand out from the rest. Yet the infamous Watergate complex does just that in more ways than one. A drab fixture of an otherwise stunning skyline full of marble-clad monuments, charming brick buildings…",
          url: "http://thepointsguy.com/reviews/scandal-room-watergate-50th-anniversary/",
          urlToImage:
            "https://thepointsguy.global.ssl.fastly.net/us/originals/2022/05/5.31.2022_Hall-decor-5_CGallipeau_11.jpg",
          publishedAt: "2022-06-17T13:00:11Z",
          content:
            "In a city full of historical buildings, it takes a lot to stand out from the rest. Yet the infamous Watergate complex does just that in more ways than one.\r\nA drab fixture of an otherwise stunning sk… [+8769 chars]",
        },
        {
          source: { id: null, name: "Iasbaba.com" },
          author: "IASbaba",
          title:
            "Baba’s Explainer – UK-Rwanda plan for Asylum seekers & India’s Refugee Issue",
          description:
            "ARCHIVES Syllabus GS-2: Human Rights GS-2: Effect of policies and politics of developed and developing countries Context: The first flight scheduled to deport asylum seekers from the United Kingdom to Rwanda as part of the UK-Rwanda plan was cancelled on 14 J…",
          url: "https://iasbaba.com/2022/06/babas-explainer-uk-rwanda-plan-for-asylum-seekers-indias-refugee-issue/",
          urlToImage:
            "https://iasbaba.com/wp-content/uploads/2022/06/UK-Rwanda-plan-for-Asylum-seekers-Indias-Refugee-Issue.jpg",
          publishedAt: "2022-06-17T12:49:48Z",
          content:
            "ARCHIVES\r\nSyllabus\r\n<ul><li>GS-2: Human Rights</li><li>GS-2: Effect of policies and politics of developed and developing countries</li></ul>Context: The first flight scheduled to deport asylum seeker… [+14551 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "OMNIQ Corp.",
          title:
            "OMNIQ’s Q Shield™ AI-Based Safe City system, Selected in the City of East Dublin, Georgia To Combat Crime and Enforce Traffic Violations",
          description:
            "East Dublin joins cities already using Q Shield™ successfully as a major force multiplier in fighting Crime and keeping their street’s safeQ Shield...",
          url: "https://finance.yahoo.com/news/omniq-q-shield-ai-based-124500275.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/xN.xWNN0Pv2781AcxFC9YQ--~B/aD01NDt3PTE1MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/globenewswire.com/00a44365ed3508ab7736e8bf069bd79a",
          publishedAt: "2022-06-17T12:45:00Z",
          content:
            "<ul><li>East Dublin joins cities already using Q Shield successfully as a major force multiplier in fighting Crime and keeping their streets safe\r\n</li><li>Q Shield integrates omniQs proprietary AI b… [+4211 chars]",
        },
        {
          source: { id: null, name: "Billings Gazette" },
          author: "AP",
          title: "AP News Summary at 8:40 a.m. EDT",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power",
          url: "https://billingsgazette.com/news/national/ap-news-summary-at-9-04-a-m-edt/article_2247285a-fb16-51e4-ad80-dade141b89e4.html",
          urlToImage:
            "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
          publishedAt: "2022-06-17T12:40:54Z",
          content:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power\r\nWASHINGTON (AP) Watergate and Jan. 6 are a half-century apart, in vastly different eras, and they were about different things. But in bot… [+7761 chars]",
        },
        {
          source: { id: null, name: "New York Daily News" },
          author: "Gina Salamone",
          title:
            "Staten Island’s ‘Impractical Jokers’ will appear on Shark Week this year",
          description:
            "The Staten Island-bred cast of the truTV hidden camera show — currently consisting of James “Murr” Murray, Brian “Q” Quinn and Sal Vulcano — will be guests on Shark Week for the first time ever this summer.",
          url: "https://www.nydailynews.com/snyde/ny-impractical-jokers-shark-week-discovery-channel-staten-island-20220617-yzfbwxdz4rbp5j4upgtjw66nsa-story.html",
          urlToImage:
            "https://www.nydailynews.com/resizer/tR430xN-Bo9iI1kFNsQuI-CkidE=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/QJIS32SJ3FGPHHQKDR4I2Q25ZU.jpg",
          publishedAt: "2022-06-17T12:36:11Z",
          content:
            "Messing around with sharks is no joke but thats not stopping the stars of Impractical Jokers from shooting a show about them.\r\nThe Staten Island-bred cast of the truTV hidden camera show currently co… [+1988 chars]",
        },
        {
          source: { id: null, name: "Richmond.com" },
          author: "AP",
          title: "AP News Summary at 8:34 a.m. EDT",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power",
          url: "https://richmond.com/news/national/ap-news-summary-at-8-40-a-m-edt/article_16465723-edbc-598e-b5e8-790867c1ea31.html",
          urlToImage:
            "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
          publishedAt: "2022-06-17T12:34:03Z",
          content:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power\r\nWASHINGTON (AP) Watergate and Jan. 6 are a half-century apart, in vastly different eras, and they were about different things. But in bot… [+8918 chars]",
        },
        {
          source: { id: null, name: "Roanoke Times" },
          author: "AP",
          title: "AP News Summary at 8:34 a.m. EDT",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power",
          url: "https://roanoke.com/news/national/ap-news-summary-at-8-40-a-m-edt/article_7c03c1b8-0886-5c76-b145-222f4829c95b.html",
          urlToImage:
            "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
          publishedAt: "2022-06-17T12:34:03Z",
          content:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power\r\nWASHINGTON (AP) Watergate and Jan. 6 are a half-century apart, in vastly different eras, and they were about different things. But in bot… [+7625 chars]",
        },
        {
          source: { id: null, name: "Futurity: Research News" },
          author: "Stanford",
          title: "See a tiny robot suck up cargo as prep for drug delivery",
          description:
            'The origami-inspired "millirobot" is a step toward targeted drug delivery and less invasive medical procedures.',
          url: "https://www.futurity.org/millirobots-drug-delivery-2754832-2/",
          urlToImage:
            "https://www.futurity.org/wp/wp-content/uploads/2022/06/millirobot_1600.jpg",
          publishedAt: "2022-06-17T12:29:46Z",
          content:
            "Magnetic fields power the tiny crawling robots that scientists are creating to improve drug delivery.\r\nIf you’ve ever swallowed the same round tablet in hopes of curing everything from stomach cramps… [+4654 chars]",
        },
        {
          source: { id: null, name: "Skift" },
          author: "Colette Edenborough",
          title: "Podcast: Africa Rising",
          description:
            "This episode of the Event Manager Podcast, by Skift Meetings, features Rick Taylor, CEO of the Business Tourism Company. Titled Africa Rising, we delve into the rise of the destinations within the continent for business events. Rick began his career within ad…",
          url: "http://meetings.skift.com/podcast-africa-rising/",
          urlToImage:
            "https://meetings.skift.com/wp-content/uploads/2022/06/Skift-Meetings-podcast-Rick-Taylor_1200x756-fb-speaker-no-sponsor.png",
          publishedAt: "2022-06-17T12:28:02Z",
          content:
            "This episode of the Event Manager Podcast, by Skift Meetings, featuresRick Taylor, CEO of the Business Tourism Company. Titled Africa Rising, we delve into the rise of the destinations within the con… [+3582 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "Research and Markets",
          title:
            "United States Multiple Beverage Market Report 2022-2026: How Key Beverage Category Market Shares Have Shifted Over Time",
          description:
            'Dublin, June 17, 2022 (GLOBE NEWSWIRE) -- The "2022 Multiple Beverage Marketplace in the U.S." report from Beverage Marketing has been added to...',
          url: "https://finance.yahoo.com/news/united-states-multiple-beverage-market-122300840.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/HP.E8HUfnyGeLtMAKwLgAQ--~B/aD01ODt3PTQ4MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/globenewswire.com/93d5b27580f67db722dd7c112e43e8bc",
          publishedAt: "2022-06-17T12:23:00Z",
          content:
            'Dublin, June 17, 2022 (GLOBE NEWSWIRE) -- The "2022 Multiple Beverage Marketplace in the U.S." report from Beverage Marketing has been added to ResearchAndMarkets.com\'s offering. \r\nThe comprehensive … [+5032 chars]',
        },
        {
          source: { id: null, name: "Columbia Journalism Review" },
          author: "Jon Allsop",
          title: "Muddying media myths about Watergate, fifty years on",
          description:
            "<p>Earlier this month, Barry Sussman, a former editor at the Washington Post, died at the age of eighty-seven. Sussman played a crucial role in his paper’s coverage of Watergate—mastering the arcana of the story and overseeing the reporting of Bob Woodward an…",
          url: "https://www.cjr.org/the_media_today/watergate_50_anniversary_woodward_bernstein_media.php",
          urlToImage:
            "https://www.cjr.org/wp-content/uploads/2017/10/sullivan-secondary-600x314.jpg?122376",
          publishedAt: "2022-06-17T12:22:17Z",
          content:
            "Earlier this month, Barry Sussman, a former editor at the Washington Post, died at the age of eighty-seven. Sussman played a crucial role in his papers coverage of Watergatemastering the arcana of th… [+15963 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "Allego, a Leading Pan-European EV Fast Charging Network, Reports Summary First-Quarter 2022 Unaudited Results",
          description:
            "ARNHEM, Netherlands & PARIS & NEW YORK--(BUSINESS WIRE)--Allego N.V. (“Allego” or the “Company”) (NYSE: ALLG), a leading pan-European public electric vehicle fast-charging network, announced unaudited summary financial and operating results for the first quar…",
          url: "https://www.businesswire.com/news/home/20220617005074/en/Allego-a-Leading-Pan-European-EV-Fast-Charging-Network-Reports-Summary-First-Quarter-2022-Unaudited-Results",
          urlToImage:
            "https://mms.businesswire.com/media/20220617005074/en/1489818/23/Allego_Logo.jpg",
          publishedAt: "2022-06-17T12:10:05Z",
          content:
            "ARNHEM, Netherlands &amp; PARIS &amp; NEW YORK--(BUSINESS WIRE)--Allego N.V. (Allego or the Company) (NYSE: ALLG), a leading pan-European public electric vehicle fast-charging network, announced unau… [+13503 chars]",
        },
        {
          source: { id: null, name: "Roanoke Times" },
          author: "AP",
          title: "AP News Summary at 8:07 a.m. EDT",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power",
          url: "https://roanoke.com/news/national/ap-news-summary-at-8-07-a-m-edt/article_7c03c1b8-0886-5c76-b145-222f4829c95b.html",
          urlToImage:
            "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
          publishedAt: "2022-06-17T12:07:31Z",
          content:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power\r\nWASHINGTON (AP) Watergate and Jan. 6 are a half-century apart, in vastly different eras, and they were about different things. But in bot… [+7226 chars]",
        },
        {
          source: { id: null, name: "Billings Gazette" },
          author: "AP",
          title: "AP News Summary at 7:55 a.m. EDT",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power",
          url: "https://billingsgazette.com/news/national/ap-news-summary-at-8-07-a-m-edt/article_2247285a-fb16-51e4-ad80-dade141b89e4.html",
          urlToImage:
            "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
          publishedAt: "2022-06-17T11:55:42Z",
          content:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power\r\nWASHINGTON (AP) Watergate and Jan. 6 are a half-century apart, in vastly different eras, and they were about different things. But in bot… [+7226 chars]",
        },
        {
          source: { id: null, name: "Richmond.com" },
          author: "AP",
          title: "AP News Summary at 7:55 a.m. EDT",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power",
          url: "https://richmond.com/news/national/ap-news-summary-at-8-07-a-m-edt/article_16465723-edbc-598e-b5e8-790867c1ea31.html",
          urlToImage:
            "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
          publishedAt: "2022-06-17T11:55:42Z",
          content:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power\r\nWASHINGTON (AP) Watergate and Jan. 6 are a half-century apart, in vastly different eras, and they were about different things. But in bot… [+8519 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Euphoric Investment",
          title: "Meta Platforms Undervalued; New Growth From Reality Labs",
          description:
            "Reality Labs will be the ballast of long-term growth for Meta Platforms. Read more to see my review of the metaverse industry and how META is positioned to benefit.",
          url: "https://seekingalpha.com/article/4518937-meta-platforms-facebook-reality-labs-new-growth-engine",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1349800127/image_1349800127.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T11:55:30Z",
          content:
            "Justin Sullivan/Getty Images News\r\n(Source: Euphoric Investment)\r\nMetaverse: A New Reality\r\n Meta Platforms (NASDAQ:META) believes the metaverse to be the next evolution of social connection. Imagine… [+20683 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Avisol Capital Partners",
          title:
            "BDJ: Close-Ended Diversified Equity Fund Likely To Sustain Its High Yield",
          description:
            "BlackRock Enhanced Equity Dividend Trust’s yield is quite high as compared to average income funds. Click here for a full investment analysis of this CEF.",
          url: "https://seekingalpha.com/article/4518936-bdj-close-ended-diversified-equity-fund-likely-to-sustain-its-high-yield",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1220627489/image_1220627489.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T11:49:07Z",
          content:
            "Pgiam/iStock via Getty Images\r\nAbout BlackRock Enhanced Equity Dividend Trust\r\n BlackRock Enhanced Equity Dividend Trust (NYSE:BDJ) is a closed-ended equity fund (CEF) launched by BlackRock, Inc., an… [+7138 chars]",
        },
        {
          source: { id: null, name: "Frontpagebets.com" },
          author: "By Gerry Ahern FrontPageBets",
          title:
            "Wagers worth watching in Stanley Cup Final Game 2: Lightning at Avalanche",
          description:
            "Can two-time defending Stanley Cup champion Tampa Bay even the series? FrontPageBets takes a look at Game 2.",
          url: "https://frontpagebets.com/tncms/asset/editorial/19f7f540-ed78-11ec-a353-c32f32346fae/",
          urlToImage:
            "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/08/b0879911-aeec-5906-8e95-a7dc8e114a5e/62ab77fb97d35.preview.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
          publishedAt: "2022-06-17T11:45:00Z",
          content:
            "By Gerry Ahern\r\nFrontPageBets\r\nIn what appears to have the makings of an epic series, the Colorado Avalanche edged the two-time defending champion Tampa Bay Lightning, 4-3, in overtime of Game 1 of t… [+5481 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "ReportLinker",
          title:
            "Digital Wayfinding Solutions Market Forecast to 2028 - COVID-19 Impact and Global Analysis By Component, Deployment, Application",
          description:
            "The digital wayfinding solutions market is projected to reach US$ 665. 0 million by 2028 from US$ 234. 6 million in 2021; it is expected to grow at a CAGR of...",
          url: "https://finance.yahoo.com/news/digital-wayfinding-solutions-market-forecast-114200331.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/IN3_pUboxxFTZlP4bjcjcQ--~B/aD00MDA7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/globenewswire.com/4ce8962afb8a41766b626a7e61c8413f",
          publishedAt: "2022-06-17T11:42:00Z",
          content:
            "The digital wayfinding solutions market is projected to reach US$ 665. 0 million by 2028 from US$ 234. 6 million in 2021; it is expected to grow at a CAGR of 16. 0% from 2021 to 2028. Significant fea… [+5602 chars]",
        },
        {
          source: { id: null, name: "Whyevolutionistrue.com" },
          author: "whyevolutionistrue",
          title: "Friday: Hili dialogue",
          description:
            "Welcome to the End O’ the Week: Friday, June 17, 2022: National Apple Strudel Day. This is again a wanton act of cultural appropriation, but the stuff is good. Here’s a piece of Apfelstrudel mit Schlag (whipped cream) and an Einspänner (coffee with whipped cr…",
          url: "https://whyevolutionistrue.com/2022/06/17/friday-hili-dialogue-377/",
          urlToImage:
            "https://whyevolutionistrue.com/wp-content/uploads/2022/06/288370356_10225909776278359_1884932856938272567_n.jpg",
          publishedAt: "2022-06-17T11:30:34Z",
          content:
            "Welcome to the End O’ the Week: Friday, June 17, 2022: National Apple Strudel Day. This is again a wanton act of cultural appropriation, but the stuff is good. Here’s a piece of Apfelstrudel mit Schl… [+16257 chars]",
        },
      ],
    };
    console.log(data.articles);
    append_national_1(data.articles);
    append_national_2(data.articles);
    append_national_3(data.articles);
  }
  
  getData2();
  
  function getData3(query) {
    let data = {
      status: "ok",
      totalResults: 416,
      articles: [
        {
          source: { id: null, name: "Incrediblethings.com" },
          author: "Jimmy Bell",
          title: "In 2022, what are the top trends in crypto?",
          description:
            "The crypto sector is among the fastest developing and most interesting sectors. Furthermore, this provides virtually daily reports about invest in Ethereum or partnership opportunities. It could be difficult to continue with all that’s happening right now. Ne…",
          url: "https://incrediblethings.com/money/cryptocurrency/in-2022-what-are-the-top-trends-in-crypto/",
          urlToImage:
            "https://cdn.incrediblethings.com/wp-content/uploads/2022/06/bigstock-Bitcoin-Business-Crypto-Curre-425067959.jpg",
          publishedAt: "2022-06-17T13:05:31Z",
          content:
            "The crypto sector is among the fastest developing and most interesting sectors. Furthermore, this provides virtually daily reports about invest in Ethereum or partnership opportunities. It could be d… [+3582 chars]",
        },
        {
          source: { id: null, name: "Streamingmedia.com" },
          author:
            "https://www.streamingmedia.com/Authors/5093-Streaming-Media-Editorial-Staff.htm",
          title: "eCommerce and the Future of Streaming Monetization",
          description:
            "Bulldog DM's John Petrocelli and LiveX's Corey Behnke discuss the explosion of ecommerce in streaming that's booming overseas and increasingly coming to North America, and the emerging opportunities for maximizing revenue with interactive streaming in this cl…",
          url: "https://www.streamingmedia.com/Articles/ReadArticle.aspx?ArticleID=153394",
          urlToImage:
            "https://dzceab466r34n.cloudfront.net/Images/ArticleImages/146342-ecommerce-fture-streaming-ORG.png",
          publishedAt: "2022-06-17T13:05:15Z",
          content:
            "Learn more about streaming monetization at Streaming Media West 2022.\r\nJohn Petrocelli: One thing that's coming up pretty quickly is ecommerce live streaming, which is a $300 billion-plus business in… [+3109 chars]",
        },
        {
          source: { id: null, name: "Raw Story" },
          author: "Matthew Chapman",
          title:
            "'Betrayal of America': ABC's Jon Karl delivers blunt summary of Trump's actions revealed by J6 Committee",
          description:
            'On Friday\'s edition of ABC\'s "Good Morning America," Jon Karl broke down the significance of what the House Select Committee investigating the January 6 attack on the U.S. Capitol has uncovered.Specifically, he argued, there is now "a direct line between the …',
          url: "https://www.rawstory.com/jon-karl-trump/",
          urlToImage:
            "https://www.rawstory.com/media-library/trump.jpg?id=29770374&width=1200&coordinates=0%2C25%2C0%2C25&height=600",
          publishedAt: "2022-06-17T13:03:32Z",
          content:
            "The action was the latest against Tesla, which has been hit by a spate of sexual harassment lawsuits and Black employees complaining of rampant racism. \r\nIn February, the state of California sued Tes… [+1694 chars]",
        },
        {
          source: { id: null, name: "The Conversation Africa" },
          author:
            "Al Chukwuma Okoli, Senior Lecturer and Consultant-researcher, Department of Political Science, Federal University Lafia",
          title: "Who's at risk of being kidnapped in Nigeria?",
          description:
            "Nigerians are at risk of kidnapping as the cost of committing this crime is far less than its benefits.",
          url: "https://theconversation.com/whos-at-risk-of-being-kidnapped-in-nigeria-184217",
          urlToImage:
            "https://images.theconversation.com/files/468808/original/file-20220614-11-ftbhmr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
          publishedAt: "2022-06-17T13:02:40Z",
          content:
            "Parents and relatives of abducted students demanding the release of their families who had spent 55 days in captivity.as at March 12, 2021. Photo by Kola Sulaimon/AFP via Getty Images\r\nNigeria ranks … [+6117 chars]",
        },
        {
          source: { id: "the-washington-post", name: "The Washington Post" },
          author: "Cat Zakrzewski, Aaron Schaffer",
          title:
            "Analysis | An outgoing Pentagon official calls for more funding for tech start-up work - The Washington Post",
          description:
            "Mike Brown, who’s leaving his job as the Defense Department’s emissary to Silicon Valley, says the Pentagon needs to do more.",
          url: "https://www.washingtonpost.com/politics/2022/06/17/an-outgoing-pentagon-official-calls-more-funding-tech-start-up-work/",
          urlToImage:
            "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M4XFTHHN2QI6ZH4QPHPR7MUCSY.jpg&w=1440",
          publishedAt: "2022-06-17T13:02:30Z",
          content:
            "Placeholder while article actions load\r\nGood morning! I'm back at The Tech 202 this morning as well! There wont be a newsletter Monday, so well be back Tuesday. As always, send me your tips: cat.zakr… [+8327 chars]",
        },
        {
          source: { id: null, name: "Elearningindustry.com" },
          author: "Christopher Pappas",
          title:
            "Top Content Providers For Upskilling And Reskilling Employees (2022)",
          description:
            "Are you curious to find the best upskilling and reskilling programs for your employees? These top content providers can help you out.\nThis post was first published on eLearning Industry.",
          url: "https://elearningindustry.com/upskilling-and-reskilling-programs-for-employees-top-content-providers",
          urlToImage:
            "https://cdn.elearningindustry.com/wp-content/uploads/2022/06/Top-Content-Providers-for-Upskilling-and-Reskilling-Employees_Image-With-Badge.png",
          publishedAt: "2022-06-17T13:00:23Z",
          content:
            "Adapting to the new normal means that upskilling and reskilling employees is now a top priority for businesses worldwide. But which are the best upskilling and reskilling programs? And how can you ch… [+31120 chars]",
        },
        {
          source: { id: null, name: "CryptoSlate" },
          author: "Jinia Shawdagor",
          title:
            "BlockFi liquidates major counterparty after it fails to meet margin call",
          description:
            "Crypto lending platform BlockFi liquidated a large client after it failed to meet obligations on an overcollateralized margin loan, the company’s founder and CEO Zac Prince announced June 16. \nThe post BlockFi liquidates major counterparty after it fails to m…",
          url: "https://cryptoslate.com/blockfi-liquidates-major-counterparty-after-it-fails-to-meet-margin-call/",
          urlToImage:
            "https://cryptoslate.com/wp-content/uploads/2022/06/image_2022-06-17_174809888.png",
          publishedAt: "2022-06-17T13:00:19Z",
          content:
            "Want to work with us? CryptoSlate is hiring for a handful of positions!Crypto lending platform BlockFi liquidated a large client after it failed to meet obligations on an overcollateralized margin lo… [+3528 chars]",
        },
        {
          source: { id: null, name: "Forbes" },
          author:
            "Jorge Garcia, Forbes Councils Member, \n Jorge Garcia, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/jorgegarcia/",
          title: "How To Successfully Execute A FinTech Digital Product",
          description:
            "As you move through the digital product execution lifecycle, you will reach stages where you should evaluate your progress and assess how well the product is addressing its stated goals and the business vision behind it.",
          url: "https://www.forbes.com/sites/forbestechcouncil/2022/06/17/how-to-successfully-execute-a-fintech-digital-product/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve//62ab3a9a388824ae945433dc/0x0.jpg?format=jpg&width=1200",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Founding Partner &amp; CTO at Hello Iconic. 20+ years leading Digital Products projects &amp; award winner of MIT Innovators under 35.\r\ngetty\r\nBuilding a successful digital product can be complicated… [+6369 chars]",
        },
        {
          source: { id: null, name: "Entrepreneur" },
          author: "Stephen Day",
          title: "How Private Equity Can Revitalize Procurement",
          description:
            "The procurement cycle looks very different in publicly listed companies compared to private equity.",
          url: "https://www.entrepreneur.com/article/428036",
          urlToImage:
            "https://assets.entrepreneur.com/content/3x2/2000/1654630263-GettyImages-1020788612.jpg",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "The pandemic highlighted the important role of procurement in managing health initiatives, navigating new areas of risk management, taking on economic, social and corporate governance (ESG) initiativ… [+4807 chars]",
        },
        {
          source: { id: null, name: "Motley Fool" },
          author: "newsfeedback@fool.com (Nell McPherson)",
          title:
            "You Might Be a Real Estate Investor and You Didn't Even Know It",
          description:
            "You might be surprised how many people don't realize they're real estate investors already -- and aren't taking full advantage.",
          url: "https://www.fool.com/real-estate/2022/06/17/you-might-be-a-real-estate-investor-and-you-didnt/",
          urlToImage:
            "https://g.foolcdn.com/editorial/images/685442/smiling-young-woman-home-office.jpg",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "When you picture a real estate investor, you might imagine a long-term rental property landlord or maybe a vacation rental property owner. You could also picture someone keeping an eye on their real … [+3294 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Katie Schoolov",
          title:
            "Stolen goods sold on Amazon, eBay and Facebook are causing havoc for major retailers",
          description:
            "Legislators and retailers want Amazon and Facebook Marketplace to crack down on the sale of stolen goods following a recent spree of organized retail theft.",
          url: "https://www.cnbc.com/2022/06/17/the-fight-against-stolen-products-on-amazon-and-facebook-marketplace.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107076951-1655390075835-CNBC_ORC_hammer2.jpg?v=1655390355&w=1920&h=1080",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Over the past year, large-scale robberies have swept through stores like Louis Vuitton in San Francisco's Union Square and a nearby Nordstrom, which was robbed by 80 people.\r\nLaw enforcement and reta… [+14437 chars]",
        },
        {
          source: { id: null, name: "Freecodecamp.org" },
          author: "Md. Fahim Bin Amin",
          title: "The Most Popular Coding Challenge Websites",
          description:
            "If you want to improve your analytical skills, there's no better way to do that\nthan solving problems.\n\nIf you are a programmer, then this is something you should do for yourself.\nProgrammers need to deal with all sorts of problems almost every day.\n\nMost imp…",
          url: "https://www.freecodecamp.org/news/the-most-popular-coding-challenge-websites/",
          urlToImage:
            "https://www.freecodecamp.org/news/content/images/2022/06/fCC-Banner.png",
          publishedAt: "2022-06-17T12:59:00Z",
          content:
            "If you want to improve your analytical skills, there's no better way to do that than solving problems.\r\nIf you are a programmer, then this is something you should do for yourself. Programmers need to… [+22088 chars]",
        },
        {
          source: { id: null, name: "Incrediblethings.com" },
          author: "Jimmy Bell",
          title: "How Can You Create Your Crypto Faucet?",
          description:
            "Because of their special characteristics, numerous customers have grown to be drawn to Blockchain Application transactions and also the weaknesses of fiat currency transactions happen to be conquered effectively by them. As a result of numerous reasons, lots …",
          url: "https://incrediblethings.com/money/cryptocurrency/how-can-you-create-your-crypto-faucet/",
          urlToImage:
            "https://cdn.incrediblethings.com/wp-content/uploads/2022/06/bigstock-216986740.jpg",
          publishedAt: "2022-06-17T12:54:57Z",
          content:
            "Because of their special characteristics, numerous customers have grown to be drawn to Blockchain Application transactions and also the weaknesses of fiat currency transactions happen to be conquered… [+3542 chars]",
        },
        {
          source: { id: "independent", name: "Independent" },
          author: "Adam Smith",
          title:
            "Google worker was fired for exposing a ‘spiritual organisation’ inside company, lawsuit claims",
          description:
            "The Fellowship of Friends believes it will create a new civilisation following a prophesised doomsday event",
          url: "https://www.independent.co.uk/tech/google-worker-fired-religious-cult-b2103428.html",
          urlToImage:
            "https://static.independent.co.uk/2021/02/02/17/iStock-1163973538.jpg?quality=75&width=1200&auto=webp",
          publishedAt: "2022-06-17T12:53:38Z",
          content:
            "A former Google worker claims that he was fired for blowing the whistle on a spiritual organisation that had developed within the company.\r\nA New York Times article published this week described how … [+2068 chars]",
        },
        {
          source: { id: null, name: "Gadgets360.com" },
          author: "Gadgets 360 Staff With Inputs From AFP",
          title:
            "Elon Musk Sued by Tesla Shareholder Over Racism, Sexual Harassment Complaints",
          description:
            "A Tesla shareholder has filed legal proceedings against Elon Musk and the company's board of directors, accusing them of ignoring employee complaints of racism and sexual harassment.",
          url: "https://gadgets360.com/transportation/news/elon-musk-sued-by-tesla-shareholder-over-racism-sexual-harassment-complaints-3076401",
          urlToImage:
            "https://i.gadgets360cdn.com/large/elon_musk_tesla_reuters_1639982416980.jpg",
          publishedAt: "2022-06-17T12:51:44Z",
          content:
            "A Tesla shareholder has filed legal proceedings against Elon Musk and the company's board of directors, accusing them of ignoring employee complaints of racism and sexual harassment.\r\nThe lawsuit  br… [+2144 chars]",
        },
        {
          source: { id: null, name: "The Conversation Africa" },
          author:
            "Michael Jacobs, Professorial Fellow, Sheffield Political Economy Research Institute (SPERI), University of Sheffield",
          title:
            "The latest Bank of England rate rise won't do much to tackle inflation - here's what could work",
          description:
            "Recent rate hikes will not do much to tackle inflation, but greater cooperation between the Bank of England and the government could help the UK economy.",
          url: "https://theconversation.com/the-latest-bank-of-england-rate-rise-wont-do-much-to-tackle-inflation-heres-what-could-work-185265",
          urlToImage:
            "https://images.theconversation.com/files/469440/original/file-20220617-18-ma0f43.jpg?ixlib=rb-1.1.0&rect=265%2C861%2C4796%2C2398&q=45&auto=format&w=1356&h=668&fit=crop",
          publishedAt: "2022-06-17T12:50:42Z",
          content:
            "There wasn’t much dramatic tension as markets waited for the Bank of England’s latest decision on interest rates. The fifth monthly quarter-point hike in a row was largely expected, taking the base r… [+6131 chars]",
        },
        {
          source: { id: null, name: "BNNBloomberg.ca" },
          author: "Bloomberg News",
          title: "New CNN Boss Seeks to Create Less Divisive News Network...",
          description:
            "New CNN Boss Seeks to Create Less Divisive News Network...\r\n\n \n \n \n (Second column, 10th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:TROUBLES: USA TODAY Deletes 23 Articles After Reporter Fabrication...",
          url: "http://www.bnnbloomberg.ca/new-cnn-boss-seeks-to-create-a-less-divisive-news-network-1.1780244",
          urlToImage:
            "http://www.bnnbloomberg.ca/polopoly_fs/1.1780245!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/chris-licht-photographer-dimitrios-kambouris-getty-images.jpg",
          publishedAt: "2022-06-17T12:49:37Z",
          content:
            "(Bloomberg) -- Throughout much of his career in TV, Chris Licht has obsessed over ratings, often scrutinizing viewership data on a minute-by-minute basis to diagnose when viewers lost interest. Once,… [+8054 chars]",
        },
        {
          source: { id: null, name: "Daily Mail" },
          author: "Alex Hammer",
          title:
            "WWE's Vince McMahon replaced as CEO by his daughter after he's investigated for affair with staffer",
          description:
            "McMahon, long the face of the wrestling firm, will reportedly step aside pending an investigation into 'alleged executive misconduct' to his behavior, by the the WWE board of directors.",
          url: "https://www.dailymail.co.uk/news/article-10927113/WWEs-Vince-McMahon-replaced-CEO-daughter-hes-investigated-affair-staffer.html",
          urlToImage:
            "https://i.dailymail.co.uk/1s/2022/06/17/13/59192099-0-image-a-4_1655470243385.jpg",
          publishedAt: "2022-06-17T12:47:39Z",
          content:
            "Longtime WWE boss Vince McMahon has been replaced as CEO of the company by his daughter, amid an investigation into claims he paid $3million to a staffer and doubled her salary to keep her quiet whil… [+5650 chars]",
        },
        {
          source: { id: null, name: "Motley Fool" },
          author: "newsfeedback@fool.com (Parkev Tatevosian)",
          title: "DocuSign Stock Crashes After Earnings: Should You Buy Now?",
          description:
            "The quarterly results were disappointing, but the company's long-term advantages remain intact.",
          url: "https://www.fool.com/investing/2022/06/17/docusign-stock-crashes-after-earnings-should-you-b/",
          urlToImage:
            "https://g.foolcdn.com/editorial/images/684972/gettyimages-1351026064.jpg",
          publishedAt: "2022-06-17T12:45:00Z",
          content:
            "DocuSign(DOCU -6.05%) reported the first-quarter fiscal year 2023 earnings on June 9. The international e-signature solutions provider disappointed investors with the results, and its stock has been … [+3925 chars]",
        },
        {
          source: { id: null, name: "Forbes" },
          author:
            "Gidi Cohen, Forbes Councils Member, \n Gidi Cohen, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/gidicohen/",
          title:
            "Ransomware Defense: Preventative Techniques To Combat Attack Methods Of Today’s Cybercriminal Gangs",
          description:
            "Ransomware attacks continue to be a top-of-mind security threat for CISOs as cybercriminals become more prolific.",
          url: "https://www.forbes.com/sites/forbestechcouncil/2022/06/17/ransomware-defense-preventative-techniques-to-combat-attack-methods-of-todays-cybercriminal-gangs/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve//5f84c39410a712d6664a5d25/0x0.jpg?format=jpg&width=1200",
          publishedAt: "2022-06-17T12:45:00Z",
          content:
            "Gidi Cohen is the founder of Skybox Security, where he helps customers secure their attack surface and stay ahead of emerging threats.\r\ngetty\r\nRansomware attacks continue to be a top-of-mind security… [+4786 chars]",
        },
      ],
    };
  
    BUSINESS_MONEY_1(data.articles);
    BUSINESS_MONEY_2(data.articles);
    BUSINESS_MONEY_3(data.articles);
  }
  
  getData3();
  
  function getData4(query) {
    let data = {
      status: "ok",
      totalResults: 130,
      articles: [
        {
          source: { id: "vice-news", name: "Vice News" },
          author: "Maxwell Strachan, Tim Marchman, Jordan Pearson",
          title:
            "Founders of $10 Billion Crypto Hedge Fund Have ‘Ghosted’ After Bets Go Bad",
          description:
            "Three Arrows Capital, founded by two high school friends, is MIA as firms scramble to assess the damage amid indications the fund has been wiped out.",
          url: "https://www.vice.com/en/article/n7zw7x/founders-of-dollar10-billion-crypto-hedge-fund-have-ghosted-after-bets-go-bad",
          urlToImage:
            "https://video-images.vice.com/articles/62ac69b01240e40096a5bd16/lede/1655470987039-untitled-design-89.jpeg?image-resize-opts=Y3JvcD0xeHc6MXhoO2NlbnRlcixjZW50ZXImcmVzaXplPTEyMDA6KiZyZXNpemU9MTIwMDoq",
          publishedAt: "2022-06-17T13:14:42Z",
          content:
            "The co-founders of an influential multi-billion-dollar crypto hedge fund have suddenly gone MIA right at the moment that people want their money. \r\nDays of swirling rumors have been followed by harde… [+7005 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "Vitalik Buterin Shares Views on Cryptocurrency's Future, Decentralized Governance, and Twitter with Taiwan’s Digital Minister Audrey Tang on TaiwanPlus",
          description:
            "TAIPEI,Taiwan--(BUSINESS WIRE)--Vitalik Buterin, the co-founder of Ethereum joins Taiwan's First Digital Minister Audrey Tang in the latest episode of the TaiwanPlus Original video podcast \"Innovative Minds with Audrey Tang,” following fellow tech trailblazer…",
          url: "https://www.businesswire.com/news/home/20220617005021/en/Vitalik-Buterin-Shares-Views-on-Cryptocurrencys-Future-Decentralized-Governance-and-Twitter-with-Taiwan%E2%80%99s-Digital-Minister-Audrey-Tang-on-TaiwanPlus",
          urlToImage:
            "https://mms.businesswire.com/media/20220617005021/en/1488835/23/0616pic.jpg",
          publishedAt: "2022-06-17T13:10:49Z",
          content:
            "TAIPEI,Taiwan--(BUSINESS WIRE)--Vitalik Buterin, the co-founder of Ethereum joins Taiwan's First Digital Minister Audrey Tang in the latest episode of the TaiwanPlus Original video podcast \"Innovativ… [+2923 chars]",
        },
        {
          source: { id: null, name: "Techmeme.com" },
          author: null,
          title:
            "Crypto hedge fund Three Arrows Capital is exploring options including asset sales and a rescue by another firm, and says it invested about $200M in Luna (Serena Ng/Wall Street Journal)",
          description:
            "Serena Ng / Wall Street Journal:\nCrypto hedge fund Three Arrows Capital is exploring options including asset sales and a rescue by another firm, and says it invested about $200M in Luna  —  Firm's founders say they still believe in the future of cryptocurrenc…",
          url: "https://www.techmeme.com/220617/p10",
          urlToImage: "https://images.wsj.net/im-566362/social",
          publishedAt: "2022-06-17T13:10:06Z",
          content:
            "The New Consumer— by Dan Frommer\r\nA publication about how and why people spend their time and money, focusing on the most interesting and innovative companies, people, products, and trends.",
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "Tech Desk",
          title: "NFT market suffers in crypto crash, sales drop by 150 per cent",
          description:
            "According to the CryptoSlam NFT tracker, the NFT sales since April have dropped by 150 per cent.",
          url: "https://indianexpress.com/article/technology/crypto/nft-market-suffers-in-crypto-crash-sales-drop-by-150-per-cent-7975690/",
          urlToImage:
            "https://images.indianexpress.com/2022/04/Untitled-design-2022-04-18T165842.359-1.jpg",
          publishedAt: "2022-06-17T13:08:30Z",
          content:
            "The NFT market is flatlining as the global crypto market continues to crash. Bitcoin, the world’s largest cryptocurrency plunged to $20,946, witnessing an 18-month low. All cryptos are currently in t… [+2265 chars]",
        },
        {
          source: { id: null, name: "U.Today" },
          author: "U.Today",
          title:
            "218 Million XRP Wired by Anon Wallets and These Two Exchanges as XRP Is up 3.55%",
          description:
            "Several transactions moving large amounts of XRP have been detected",
          url: "https://u.today/218-million-xrp-wired-by-anon-wallets-and-these-two-exchanges-as-xrp-is-up-355",
          urlToImage:
            "https://u.today/sites/default/files/styles/1200x900/public/2022-06/20746.jpg",
          publishedAt: "2022-06-17T13:06:00Z",
          content:
            "Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+1141 chars]",
        },
        {
          source: { id: null, name: "Incrediblethings.com" },
          author: "Jimmy Bell",
          title: "In 2022, what are the top trends in crypto?",
          description:
            "The crypto sector is among the fastest developing and most interesting sectors. Furthermore, this provides virtually daily reports about invest in Ethereum or partnership opportunities. It could be difficult to continue with all that’s happening right now. Ne…",
          url: "https://incrediblethings.com/money/cryptocurrency/in-2022-what-are-the-top-trends-in-crypto/",
          urlToImage:
            "https://cdn.incrediblethings.com/wp-content/uploads/2022/06/bigstock-Bitcoin-Business-Crypto-Curre-425067959.jpg",
          publishedAt: "2022-06-17T13:05:31Z",
          content:
            "The crypto sector is among the fastest developing and most interesting sectors. Furthermore, this provides virtually daily reports about invest in Ethereum or partnership opportunities. It could be d… [+3582 chars]",
        },
        {
          source: { id: null, name: "U.Today" },
          author: "U.Today",
          title: "BREAKING: Three Arrows Capital Considering Bailout",
          description:
            "The high-flying hedge fund is seeking a bailout, according to co-founder Kyle Davis",
          url: "https://u.today/breaking-three-arrows-capital-considering-bailout",
          urlToImage:
            "https://u.today/sites/default/files/styles/1200x900/public/node-32763.jpg",
          publishedAt: "2022-06-17T13:04:31Z",
          content:
            "Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+1614 chars]",
        },
        {
          source: { id: null, name: "Raw Story" },
          author: "Matthew Chapman",
          title:
            "'Betrayal of America': ABC's Jon Karl delivers blunt summary of Trump's actions revealed by J6 Committee",
          description:
            'On Friday\'s edition of ABC\'s "Good Morning America," Jon Karl broke down the significance of what the House Select Committee investigating the January 6 attack on the U.S. Capitol has uncovered.Specifically, he argued, there is now "a direct line between the …',
          url: "https://www.rawstory.com/jon-karl-trump/",
          urlToImage:
            "https://www.rawstory.com/media-library/trump.jpg?id=29770374&width=1200&coordinates=0%2C25%2C0%2C25&height=600",
          publishedAt: "2022-06-17T13:03:32Z",
          content:
            "The action was the latest against Tesla, which has been hit by a spate of sexual harassment lawsuits and Black employees complaining of rampant racism. \r\nIn February, the state of California sued Tes… [+1694 chars]",
        },
        {
          source: { id: null, name: "Daily Mail" },
          author: "James Gant",
          title:
            "Three quarters of CEOs expect global recession within next 12 to 18 months, survey shows",
          description:
            "The vast majority of CEOs fear economic decline is looming or already hitting countries across the world, the report said.",
          url: "https://www.dailymail.co.uk/news/article-10927067/Three-quarters-CEOs-expect-global-recession-12-18-months-survey-shows.html",
          urlToImage:
            "https://i.dailymail.co.uk/1s/2022/06/17/13/59192153-0-image-a-82_1655470378783.jpg",
          publishedAt: "2022-06-17T13:01:32Z",
          content:
            "WILL THIS MAKE IT MORE EXPENSIVE TO BUY A HOME?\r\nOne of the sectors the Fed has been watching closely is the interest-rate sensitive housing market, where prices have risen 38 percent since the start… [+11681 chars]",
        },
        {
          source: { id: null, name: "CryptoSlate" },
          author: "Jinia Shawdagor",
          title:
            "BlockFi liquidates major counterparty after it fails to meet margin call",
          description:
            "Crypto lending platform BlockFi liquidated a large client after it failed to meet obligations on an overcollateralized margin loan, the company’s founder and CEO Zac Prince announced June 16. \nThe post BlockFi liquidates major counterparty after it fails to m…",
          url: "https://cryptoslate.com/blockfi-liquidates-major-counterparty-after-it-fails-to-meet-margin-call/",
          urlToImage:
            "https://cryptoslate.com/wp-content/uploads/2022/06/image_2022-06-17_174809888.png",
          publishedAt: "2022-06-17T13:00:19Z",
          content:
            "Want to work with us? CryptoSlate is hiring for a handful of positions!Crypto lending platform BlockFi liquidated a large client after it failed to meet obligations on an overcollateralized margin lo… [+3528 chars]",
        },
        {
          source: { id: null, name: "Forbes" },
          author:
            "Jorge Garcia, Forbes Councils Member, \n Jorge Garcia, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/jorgegarcia/",
          title: "How To Successfully Execute A FinTech Digital Product",
          description:
            "As you move through the digital product execution lifecycle, you will reach stages where you should evaluate your progress and assess how well the product is addressing its stated goals and the business vision behind it.",
          url: "https://www.forbes.com/sites/forbestechcouncil/2022/06/17/how-to-successfully-execute-a-fintech-digital-product/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve//62ab3a9a388824ae945433dc/0x0.jpg?format=jpg&width=1200",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Founding Partner &amp; CTO at Hello Iconic. 20+ years leading Digital Products projects &amp; award winner of MIT Innovators under 35.\r\ngetty\r\nBuilding a successful digital product can be complicated… [+6369 chars]",
        },
        {
          source: { id: null, name: "Crypto Daily" },
          author: "Laurie Dunn",
          title: "Panama president pushes back on bitcoin adoption",
          description:
            "Despite being approved by the Panamanian national assembly only a couple of months ago, the path to bitcoin adoption has ground to a halt after President Laurentino Cortizo said that he would not give the go-ahead until the proposal contained proper money lau…",
          url: "https://cryptodaily.co.uk/2022/06/panama-president-pushes-back-on-bitcoin-adoption",
          urlToImage:
            "https://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/pan-1.jpeg",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Despite being approved by the Panamanian national assembly only a couple of months ago, the path to bitcoin adoption has ground to a halt after President Laurentino Cortizo said that he would not giv… [+1712 chars]",
        },
        {
          source: { id: null, name: "Incrediblethings.com" },
          author: "Jimmy Bell",
          title: "How Can You Create Your Crypto Faucet?",
          description:
            "Because of their special characteristics, numerous customers have grown to be drawn to Blockchain Application transactions and also the weaknesses of fiat currency transactions happen to be conquered effectively by them. As a result of numerous reasons, lots …",
          url: "https://incrediblethings.com/money/cryptocurrency/how-can-you-create-your-crypto-faucet/",
          urlToImage:
            "https://cdn.incrediblethings.com/wp-content/uploads/2022/06/bigstock-216986740.jpg",
          publishedAt: "2022-06-17T12:54:57Z",
          content:
            "Because of their special characteristics, numerous customers have grown to be drawn to Blockchain Application transactions and also the weaknesses of fiat currency transactions happen to be conquered… [+3542 chars]",
        },
        {
          source: { id: null, name: "U.Today" },
          author: "U.Today",
          title:
            "Celsius in Talks with SEC About Withdrawal Freeze as Investigations Get Underway: Fox Reporter",
          description:
            "Celsius Network is in communication with United States Securities and Exchange Commission (SEC)",
          url: "https://u.today/celsius-in-talks-with-sec-about-withdrawal-freeze-as-investigations-get-underway-fox-reporter",
          urlToImage:
            "https://u.today/sites/default/files/styles/1200x900/public/2022-06/20741.jpg",
          publishedAt: "2022-06-17T12:53:00Z",
          content:
            "Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+2736 chars]",
        },
        {
          source: { id: null, name: "Gadgets360.com" },
          author: "Gadgets 360 Staff With Inputs From AFP",
          title:
            "Elon Musk Sued by Tesla Shareholder Over Racism, Sexual Harassment Complaints",
          description:
            "A Tesla shareholder has filed legal proceedings against Elon Musk and the company's board of directors, accusing them of ignoring employee complaints of racism and sexual harassment.",
          url: "https://gadgets360.com/transportation/news/elon-musk-sued-by-tesla-shareholder-over-racism-sexual-harassment-complaints-3076401",
          urlToImage:
            "https://i.gadgets360cdn.com/large/elon_musk_tesla_reuters_1639982416980.jpg",
          publishedAt: "2022-06-17T12:51:44Z",
          content:
            "A Tesla shareholder has filed legal proceedings against Elon Musk and the company's board of directors, accusing them of ignoring employee complaints of racism and sexual harassment.\r\nThe lawsuit  br… [+2144 chars]",
        },
        {
          source: { id: null, name: "Incrediblethings.com" },
          author: "Jimmy Bell",
          title: "What is Perpetual Protocol?",
          description:
            "For swapping Decentralized Perpetual Contracts, a new model known as Virtual Automated Market Maker (vAMM) is introduced by Perpetual Protocol. The Perpetual Protocol Exchange permits anyone to develop a perpetual agreement with any commodity utilizing an on-…",
          url: "https://incrediblethings.com/money/cryptocurrency/what-is-perpetual-protocol/",
          urlToImage:
            "https://cdn.incrediblethings.com/wp-content/uploads/2022/06/bigstock-Huge-Stack-Of-Cryptocurrencies-430464472.jpg",
          publishedAt: "2022-06-17T12:50:35Z",
          content:
            "For swapping Decentralized Perpetual Contracts, a new model known as Virtual Automated Market Maker (vAMM) is introduced by Perpetual Protocol. The Perpetual Protocol Exchange permits anyone to devel… [+3971 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "Olga Kharif",
          title: "Crypto Traders Turn Against Each Other...",
          description:
            "Crypto Traders Turn Against Each Other...\r\n\n \n \n \n (Top headline, 6th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Five ways Fed rate hikes will impact Americans...\r\nRecession Fears Surge Among CEOs...\r\nHome Price Drops Accelerate...\r\n$3 trillion retirement savi…",
          url: "https://finance.yahoo.com/news/crypto-traders-turn-against-other-110000697.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/TflQ3dczckZOv9Trl4oaug--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/cxFSCB7pRpZw593ZBK57fg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/b048c21742edd24f8f71b08014f1fe95",
          publishedAt: "2022-06-17T12:49:36Z",
          content:
            "(Bloomberg) --\r\nMost Read from Bloomberg\r\nWith crypto prices tumbling precipitously, traders have begun increasingly turning against one another to eke out ever-elusive profits.\r\nMany shark traders s… [+4900 chars]",
        },
        {
          source: {
            id: "the-wall-street-journal",
            name: "The Wall Street Journal",
          },
          author: "Clare Ansberry",
          title: "What Inflation? Super Frugal Made for This Moment...",
          description:
            "What Inflation? Super Frugal Made for This Moment...\r\n\n \n \n \n (Top headline, 8th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Five ways Fed rate hikes will impact Americans...\r\nRecession Fears Surge Among CEOs...\r\nHome Price Drops Accelerate...\r\n$3 trillion reti…",
          url: "https://www.wsj.com/articles/inflation-thrifty-how-frugal-families-save-money-11655417641",
          urlToImage: "https://images.wsj.net/im-563674/social",
          publishedAt: "2022-06-17T12:49:36Z",
          content:
            "Extremely frugal families are coping with record-high inflation by doing what theyve always done: not spending money.\r\nIt doesnt affect us as much because of the way we shop, says Art Shillito, who a… [+245 chars]",
        },
        {
          source: { id: null, name: "Federalreserve.gov" },
          author: null,
          title: "Powell, Welcoming Remarks",
          description:
            "Good morning, and welcome to the inaugural conference on the International Roles of the U.S. Dollar. Thank you all for participating and for lending your exper",
          url: "https://www.federalreserve.gov/newsevents/speech/powell20220617a.htm",
          urlToImage: "https://www.federalreserve.gov/Social_Default_Image.jpg",
          publishedAt: "2022-06-17T12:45:00Z",
          content:
            "Good morning, and welcome to the inaugural conference on the International Roles of the U.S. Dollar. Thank you all for participating and for lending your expertise on this important topic. This confe… [+5421 chars]",
        },
        {
          source: { id: null, name: "Raw Story" },
          author: "Travis Gettys",
          title:
            "New York Times video blows the lid off Proud Boys' 'central role' in inciting Capitol mob",
          description:
            "The New York Times published a 17-minute video showing how the Proud Boys coordinated the assault on the U.S. Capitol.The newspaper compiled evidence from court documents, text messages and hundreds of videos shot by participants to show the right-wing milita…",
          url: "https://www.rawstory.com/proud-boy-capitol/",
          urlToImage:
            "https://www.rawstory.com/media-library/proud-boys-storm-the-us-capitol-on-jan-6-2021.png?id=29989447&width=1200&coordinates=0%2C28%2C0%2C22&height=600",
          publishedAt: "2022-06-17T12:44:05Z",
          content:
            "The action was the latest against Tesla, which has been hit by a spate of sexual harassment lawsuits and Black employees complaining of rampant racism. \r\nIn February, the state of California sued Tes… [+1694 chars]",
        },
      ],
    };
  
    CRYPTO_CORNER_1(data.articles);
    CRYPTO_CORNER_2(data.articles);
    CRYPTO_CORNER_3(data.articles);
    CRYPTO_CORNER_4(data.articles);
  }
  
  getData4();
  
  function getData5() {
    let data = {
      status: "ok",
      totalResults: 657,
      articles: [
        {
          source: { id: null, name: "ESPN" },
          author: null,
          title: "Nassar's final appeal rejected by Michigan court",
          description:
            "Larry Nassar's final appeal was rejected by a Michigan court. The disgraced former sports doctor who was sentenced to decades in prison for sexually assaulting gymnasts, argued he was treated unfairly at his 2018 trial.",
          url: "https://www.espn.com/olympics/gymnastics/story/_/id/34106963/larry-nassar-loses-last-appeal-sexual-assault-scandal",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0124%2Fr318471_1296x729_16%2D9.jpg",
          publishedAt: "2022-06-17T13:22:18Z",
          content:
            "DETROIT -- The Michigan Supreme Court on Friday rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic med… [+2008 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title: "QNET Takes Home Eleven Awards for Ground-breaking Campaigns",
          description:
            "HONG KONG, June 17, 2022 /PRNewswire/ -- Asian direct selling giant QNET has once again proven itself as one of the industry's most innovative and creative businesses by sweeping multiple accolades at various award competitions in the last few months. QNET ha…",
          url: "https://www.prnewswire.com/news-releases/qnet-takes-home-eleven-awards-for-ground-breaking-campaigns-301570203.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1842146/QNET_Mena_Stevie_Awards_2022.jpg?p=facebook",
          publishedAt: "2022-06-17T13:22:00Z",
          content:
            "QNET's social media campaign around its virtual convention known as the V-Convention Connect, which attracted a whopping half a million viewers from over fifty countries to the convention, swept up t… [+8273 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title: "Mr. McMahon to Appear on SmackDown® Tonight",
          description:
            "STAMFORD, Conn.--(BUSINESS WIRE)--WWE (NYSE: WWE) today announced that Mr. McMahon will appear on SmackDown tonight at 8 pm ET live on FOX. About WWE WWE, a publicly traded company (NYSE: WWE), is an integrated media organization and recognized leader in glob…",
          url: "https://www.businesswire.com/news/home/20220617005253/en/Mr.-McMahon-to-Appear-on-SmackDown%C2%AE-Tonight",
          urlToImage:
            "https://mms.businesswire.com/media/20220617005253/en/441236/23/WWE_Logo_Primary_Light_Background_Black-Red.jpg",
          publishedAt: "2022-06-17T13:20:43Z",
          content:
            "STAMFORD, Conn.--(BUSINESS WIRE)--WWE (NYSE: WWE) today announced that Mr. McMahon will appear on SmackDown tonight at 8 pm ET live on FOX.\r\nAbout WWE\r\nWWE, a publicly traded company (NYSE: WWE), is … [+5204 chars]",
        },
        {
          source: { id: "abc-news", name: "ABC News" },
          author: "ABC News",
          title: "Larry Nassar loses last appeal in sexual assault scandal",
          description:
            "The Michigan Supreme Court has rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic medalists",
          url: "https://abcnews.go.com/Sports/wireStory/larry-nassar-loses-appeal-sexual-assault-scandal-85460540",
          urlToImage:
            "https://s.abcnews.com/images/Sports/WireAP_92f68a939017463a96216008972d4933_16x9_992.jpg",
          publishedAt: "2022-06-17T13:20:37Z",
          content:
            "DETROIT -- The Michigan Supreme Court on Friday rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic med… [+2617 chars]",
        },
        {
          source: { id: null, name: "Statetimes.in" },
          author: "Editor State Times",
          title: "Rajnath Singh inaugurates Himalayan Museum in Pahalgam",
          description:
            "SRINAGAR: Defence Minister Rajnath Singh on Friday inaugurated the Himalayan Museum at Jawahar Institute of Mountaineering and Winter Sports in Pahalgam resort of Jammu and Kashmir. Singh, who is on a two-day visit to Jammu and Kashmir to review the security …",
          url: "https://web.statetimes.in/rajnath-singh-inaugurates-himalayan-museum-in-pahalgam/",
          urlToImage:
            "https://web.statetimes.in/wp-content/uploads/2022/06/Jawahar-Institute-of-Mountaineering-Winter-Sports-JIMWS-2.jpg",
          publishedAt: "2022-06-17T13:20:16Z",
          content:
            "SRINAGAR: Defence Minister Rajnath Singh on Friday inaugurated the Himalayan Museum at Jawahar Institute of Mountaineering and Winter Sports in Pahalgam resort of Jammu and Kashmir.\r\nSingh, who is on… [+604 chars]",
        },
        {
          source: { id: null, name: "ESPN" },
          author: "Tim Bontemps",
          title:
            "One and done? Why Boston is battling Finals history -- and why it could stop a bizarre trend",
          description:
            "Despite falling in the NBA Finals, don't expect Jayson Tatum, Jaylen Brown and the Celtics to fall from contender status any time soon.",
          url: "https://www.espn.com/nba/story/_/id/34103999/nba-finals-2022-boston-celtics-pieces-experience-avoid-one-done-label",
          urlToImage:
            "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0617%2Fr1026150_1296x729_16%2D9.jpg",
          publishedAt: "2022-06-17T13:20:07Z",
          content:
            "BOSTON -- With 63 seconds remaining in Game 6 of the NBA Finals, Boston Celtics coach Ime Udoka, his team trailing by 11, waved the white flag and replaced all five of his starters.\r\nJayson Tatum, af… [+8368 chars]",
        },
        {
          source: { id: null, name: "VentureBeat" },
          author: "Peter Wayner",
          title: "What is generative artificial intelligence (AI)?",
          description:
            "Generative AIs are frequently found in various content creation roles. They’re used by movie makers to either fill narrative gaps or, sometimes, carry much of the storyline. Some news organizations generate short snippets or even entire stories about events, …",
          url: "https://venturebeat.com/2022/06/17/what-is-generative-artificial-intelligence-ai/",
          urlToImage:
            "https://venturebeat.com/wp-content/uploads/2022/06/GettyImages-1249853438.jpg?w=1200&strip=all",
          publishedAt: "2022-06-17T13:20:00Z",
          content:
            "We are excited to bring Transform 2022 back in-person July 19 and virtually July 20 - 28. Join AI and data leaders for insightful talks and exciting networking opportunities. Register today!\r\nMany ar… [+1365 chars]",
        },
        {
          source: { id: "bleacher-report", name: "Bleacher Report" },
          author: "Rob Goldberg",
          title:
            "Joe Lacob on If Warriors 'Bought' NBA Title: 'That’s a Joke; I Think It's Ridiculous'",
          description:
            "Despite some arguing the Golden S “Oh, come on,” Lacob said. “That’s a joke; I think it’s ridiculous. All of our players are guys that we drafted or minimum...",
          url: "https://bleacherreport.com/articles/10039006-joe-lacob-on-if-warriors-bought-nba-title-thats-a-joke-i-think-its-ridiculous",
          urlToImage:
            "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_3800,q_95/v1655471510/b9ypflhlnmrn8ixkw3zz.jpg",
          publishedAt: "2022-06-17T13:17:21Z",
          content:
            'Elsa/Getty Images\r\nGolden State Warriors governor Joe Lacob doesn\'t agree with the notion the team "bought" its NBA title.\r\n"Oh, come on," Lacob said after the team\'s clinching Game 6 win over the Bo… [+902 chars]',
        },
        {
          source: { id: "politico", name: "Politico" },
          author: "By Lara Korte, Jeremy B. White and Sakura Cannestra",
          title: "Could liability insurance prevent gun violence in California?",
          description: null,
          url: "https://www.politico.com/newsletters/california-playbook/2022/06/17/could-liability-insurance-prevent-gun-violence-in-california-00040327",
          urlToImage:
            "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
          publishedAt: "2022-06-17T13:16:44Z",
          content:
            "Presented by California Environmental Voters\r\nTHE BUZZ:California already requires gun owners to have a safety certificate, background check, and go through a waiting period before they can take thei… [+24943 chars]",
        },
        {
          source: { id: null, name: "Ambcrypto.com" },
          author: "Anjali Sriniwasan",
          title:
            "Nigeria and Arsenal football club legend Nwankwo Kanu signs for Sportsbet.io",
          description:
            "Football icon Nwankwo Kanu has signed as a Global Ambassador for Sportsbet.io, as the leading global favorite crypto-led sports betting site adds another superstar to its team. King Kanu, affectionately known as Papilo to his millions of fans, won Olympic Gol…",
          url: "https://ambcrypto.com/nigeria-and-arsenal-football-club-legend-nwankwo-kanu-signs-for-sportsbet-io/",
          urlToImage:
            "https://files.ambcrypto.com/wp-content/uploads/2022/06/17151232/football.png",
          publishedAt: "2022-06-17T13:15:10Z",
          content:
            "Football icon Nwankwo Kanu has signed as a Global Ambassador for Sportsbet.io, as the leading global favorite crypto-led sports betting site adds another superstar to its team.\r\nKing Kanu, affectiona… [+2958 chars]",
        },
        {
          source: { id: null, name: "ESPN" },
          author: "William E. Ricks",
          title:
            "Stars flock to social media to congratulate the Warriors on fourth title in eight seasons",
          description:
            "Golden State defeating the Boston Celtics to secure yet another NBA title elicits reactions across social media.",
          url: "https://www.espn.com/nba/story/_/id/34104525/nba-finals-2022-golden-state-warriors-championship-win-takes-social-media",
          urlToImage:
            "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0617%2Fr1026115_1296x729_16%2D9.jpg",
          publishedAt: "2022-06-17T13:15:10Z",
          content:
            "The Golden State Warriors have climbed the mountain once again, securing this year's NBA championship after beating the Boston Celtics 103-90 in Game 6 to win the series 4-2.\r\nAfter falling behind 14… [+1064 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "MGM RESORTS INTERNATIONAL CFO TO SPEAK AT JEFFERIES GLOBAL CONSUMER CONFERENCE",
          description:
            'LAS VEGAS, June 17, 2022 /PRNewswire/ -- MGM Resorts International (NYSE: MGM) ("MGM Resorts" or the "Company") will participate in the Jefferies Global Consumer Conference on Monday, June 20, 2022. MGM Resorts CFO Jonathan Halkyard will speak in a session th…',
          url: "https://www.prnewswire.com:443/news-releases/mgm-resorts-international-cfo-to-speak-at-jefferies-global-consumer-conference-301570040.html",
          urlToImage: null,
          publishedAt: "2022-06-17T13:15:00Z",
          content:
            'LAS VEGAS, June 17, 2022 /PRNewswire/ -- MGM Resorts International (NYSE: MGM) ("MGM Resorts" or the "Company") will participate in the Jefferies Global Consumer Conference on Monday, June 20, 2022. … [+1970 chars]',
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "Entertainment Desk",
          title:
            "Ajay Devgn’s Thank God sets Diwali release, will clash with Akshay Kumar’s Ram Setu at the box office",
          description:
            "Ajay Devgn's Thank God is being touted as 'a laugh riot' with a social message. The film also stars Sidharth Malhotra and Rakul Preet Singh.",
          url: "https://indianexpress.com/article/entertainment/bollywood/ajay-devgn-thank-god-diwali-release-date-akshay-kumar-ram-setu-box-office-clash-7975817/",
          urlToImage:
            "https://images.indianexpress.com/2022/04/Ajay-Devgn-1200.jpg",
          publishedAt: "2022-06-17T13:14:24Z",
          content:
            "Ajay Devgn-starrer Thank God will be released this Diwali, T-Series announced on Friday. Directed by Indra Kumar, the film also stars Sidharth Malhotra and Rakul Preet Singh. The Diwali release date … [+1254 chars]",
        },
        {
          source: { id: null, name: "NBCSports.com" },
          author: "Associated Press",
          title: "Larry Nassar loses last appeal over gymnastics sexual assault",
          description:
            "A court rejected a final appeal from sports doctor Larry Nassar, who was sentenced to prison for sexually assaulting gymnasts, including Olympic medalists.",
          url: "https://olympics.nbcsports.com/2022/06/17/larry-nassar-gymnastics-sexual-assault-appeal/",
          urlToImage:
            "https://olympics.nbcsports.com/wp-content/uploads/sites/10/2019/03/nassar.jpg?resize=1024,576",
          publishedAt: "2022-06-17T13:13:28Z",
          content:
            "DETROIT The Michigan Supreme Court on Friday rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic medali… [+2057 chars]",
        },
        {
          source: { id: null, name: "New York Post" },
          author: "Samantha Ibrahim",
          title:
            "Angelina Jolie, Brad Pitt ‘very proud’ of daughter Shiloh’s new dance video",
          description:
            "The celebrity ex-couple's 16-year-old daughter has been seen expertly showing off her choreography in Los Angeles.",
          url: "https://nypost.com/2022/06/17/angelina-jolie-brad-pitts-daughter-shiloh-is-now-a-hip-hop-dancer/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2022/06/Shiloh-.jpg?quality=75&strip=all&w=1024",
          publishedAt: "2022-06-17T13:13:09Z",
          content:
            "Shake your groove thang, Shiloh Jolie-Pitt!\r\nBrad Pitt and Angelina Jolie’s 16-year-old daughter has found her passion in hip-hop dancing and choreography.\r\nShiloh was spotted filming another dance v… [+2005 chars]",
        },
        {
          source: { id: null, name: "Mirror Online" },
          author: "mirrornews@mirror.co.uk (Andrew Gamble)",
          title:
            "George Russell welcomes FIA porpoising intervention even if Mercedes performance drops",
          description:
            "British Formula 1 star George Russell has thrown his support behind the FIA after they announced their intention to investigate and stop porpoising",
          url: "https://www.mirror.co.uk/sport/formula-1/george-russell-fia-porpoising-f1-27262376",
          urlToImage:
            "https://i2-prod.mirror.co.uk/incoming/article27262312.ece/ALTERNATES/s1200/0_F1-Grand-Prix-of-Azerbaijan.jpg",
          publishedAt: "2022-06-17T13:10:12Z",
          content:
            "Mercedes star George Russell has welcomed the FIAs decision to tackle porpoising after his teammate Lewis Hamilton struggled with severe back pain at the Azerbaijan Grand Prix. \r\nThe seven-time world… [+4392 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "ET Spotlight Special",
          title:
            "Clint Bowyer, analyst for Fox Sports & ex-NASCAR driver, suffers fatal car crash involving pedestrian",
          description:
            "While taking an exit from a Missouri highway, Clint Bowyer got entangled in a severe car crash that killed a pedestrian. While Bowyer is alive, a police investigation is underway to find the cause of the accident.",
          url: "https://economictimes.indiatimes.com/news/international/us/clint-bowyer-analyst-for-fox-sports-ex-nascar-driver-suffers-fatal-car-crash-involving-pedestrian/articleshow/92284203.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-92284172,width-1070,height-580,imgsize-65936,overlay-economictimes/photo.jpg",
          publishedAt: "2022-06-17T13:10:10Z",
          content:
            "Formerly a driver in the NASCAR Cup Series and now an analyst with Fox Sports, Clint Bowyer suffered a car crash that killed a woman. The victim was identified as Mary Jane Simmons, who was struck wh… [+1834 chars]",
        },
        {
          source: { id: null, name: "HuffPost" },
          author: "AP",
          title: "Larry Nassar Loses Last Appeal In Sexual Assault Scandal",
          description:
            "Nassar was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic medalists.",
          url: "https://www.huffpost.com/entry/larry-nassar-appeal_n_62ac7bb6e4b06169ca97f806",
          urlToImage:
            "https://img.huffingtonpost.com/asset/62ac7bb82100009c245edb84.jpeg?ops=1778_1000",
          publishedAt: "2022-06-17T13:07:57Z",
          content:
            "DETROIT (AP) The Michigan Supreme Court on Friday rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic m… [+2264 chars]",
        },
        {
          source: { id: null, name: "ESPN" },
          author: "David M. Hale",
          title: "Five takeaways from an NIL Summit for college athletes",
          description:
            "A three-day summit gave college athletes, executives, influencers and startups a chance to explore options, share ideas and raise questions around NIL.",
          url: "https://www.espn.com/college-football/story/_/id/34103067/nil-summit-glimpse-present-future-college-athletes-opportunities",
          urlToImage:
            "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1129%2Fr944233_1296x729_16%2D9.jpg",
          publishedAt: "2022-06-17T13:06:52Z",
          content:
            "ATLANTA -- It has not yet been a full year since legislation first took effect allowing college athletes to profit from their name, image and likeness (NIL), and we've already seen a public spat betw… [+8500 chars]",
        },
        {
          source: { id: null, name: "Minneapolis Star Tribune" },
          author: "ED WHITE",
          title: "Larry Nassar loses last appeal in sexual assault scandal",
          description:
            "The Michigan Supreme Court on Friday rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic medalists.",
          url: "https://www.startribune.com/larry-nassar-loses-last-appeal-in-sexual-assault-scandal/600182971/",
          urlToImage:
            "https://www.startribune.com/static/img/branding/logos/strib-social-card.png?d=1655411136",
          publishedAt: "2022-06-17T13:05:07Z",
          content:
            "DETROIT The Michigan Supreme Court on Friday rejected a final appeal from sports doctor Larry Nassar, who was sentenced to decades in prison for sexually assaulting gymnasts, including Olympic medali… [+2636 chars]",
        },
      ],
    };
  
    SPORTS_1(data.articles);
    SPORTS_2(data.articles);
    SPORTS_3(data.articles);
    SPORTS_4(data.articles);
  }
  
  getData5();
  
  let getData6 = async (query) => {
    let data = {
      status: "ok",
      totalResults: 395,
      articles: [
        {
          source: { id: null, name: "Daily Mail" },
          author: "Charlie Lankston",
          title:
            "Amber Heard challenges Johnny Depp to do his own TV interview 'if he has a problem' with hers",
          description:
            "The 36-year-old actress issued a bold ultimatum to her ex-husband via a spokesperson on Friday, hours before her explosive sit-down with Savannah Guthrie is due to air in full on Dateline.",
          url: "https://www.dailymail.co.uk/femail/article-10927405/Amber-Heard-challenges-Johnny-Depp-TV-interview-problem-hers.html",
          urlToImage:
            "https://i.dailymail.co.uk/1s/2022/06/16/22/59165821-0-image-a-28_1655414610237.jpg",
          publishedAt: "2022-06-17T13:35:20Z",
          content:
            "Amber Heard has challenged her ex-husband Johnny Depp to do his own TV interview 'if he has a problem' with her repeating her defamatory allegations that he beat her during an explosive sit-down with… [+34157 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Jason Capul",
          title:
            "Dow, S&P, and Nasdaq fight to trend higher after Thursday’s sell-off",
          description:
            "All three major market averages look to fight higher on Friday as they start off the session mixed after Thursday’s sell-off.",
          url: "https://seekingalpha.com/news/3849602-dow-sp-and-nasdaq-look-to-rally-early-on-after-thursdays-sell-off",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/173598950/image_173598950.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:33:25Z",
          content:
            "narvikk/iStock via Getty Images\r\nAll three major market averages look to fight higher on Friday as they start off the session mixed after Thursdays sell-off. To start the trading day the Dow (DJI) is… [+1541 chars]",
        },
        {
          source: { id: null, name: "Slate Magazine" },
          author: "Justin Marceau and Angela Fernandez",
          title:
            "Happy the Elephant’s Case Offers Key Lessons for the Future of Animal Rights",
          description:
            "A being or entity with rights may also have a “thing-like” status.",
          url: "https://slate.com/news-and-politics/2022/06/happy-the-elephant-lessons-for-the-future-of-animal-rights-law.html",
          urlToImage:
            "https://compote.slate.com/images/f4900b51-d9bf-4c65-8a91-014b933d42b5.jpeg?width=780&height=520&rect=1161x774&offset=0x147",
          publishedAt: "2022-06-17T13:32:27Z",
          content:
            "Happy the elephant made history on Tuesday. By arguing for her release from the Bronx Zoo, she became the first animal to have a case for animal rights decided by a court of last resort in North Amer… [+8477 chars]",
        },
        {
          source: { id: "cbc-news", name: "CBC News" },
          author: "Michelle Chapman",
          title:
            "Vince McMahon steps down as CEO of WWE amid misconduct investigation",
          description:
            "Vince McMahon is stepping down as CEO and chairman of WWE during an investigation into alleged misconduct involving the longtime leader and public face of the organization.",
          url: "https://www.cbc.ca/sports/wwe-mcmahon-steps-down-misconduct-1.6492093",
          urlToImage:
            "https://i.cbc.ca/1.6492101.1655472262!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/mcmahon-vince-061722.jpg",
          publishedAt: "2022-06-17T13:30:51Z",
          content:
            "Vince McMahon is stepping down as CEO and chairman of WWE during an investigation into alleged misconduct involving the longtime leader and public face of the organization.\r\nMcMahon will continue to … [+1524 chars]",
        },
        {
          source: { id: "usa-today", name: "USA Today" },
          author: "USA TODAY, Nathan Diller, USA TODAY",
          title:
            "Carnival Corp. to launch new sports betting and iGaming offerings on these cruise lines",
          description:
            "Cruise line operator expects to introduce mobile sports betting and iGaming on Carnival, Princess and Holland Cruises early next year.",
          url: "https://www.usatoday.com/story/travel/cruises/2022/06/17/cruises-sports-betting-carnival-princess-holland/7651660001/",
          urlToImage:
            "https://www.gannett-cdn.com/-mm-/fa914244af5254218ff03a5d6773eeb3b7df7f39/c=0-100-1920-1180/local/-/media/2021/09/22/USATODAY/usatsports/the-carnival-sunshine-on-a-cruise.jpg?width=1920&height=1080&fit=crop&format=pjpg&auto=webp",
          publishedAt: "2022-06-17T13:30:14Z",
          content:
            "Get ready to place your bets, cruise travelers. Carnival Corp. is partnering with sports betting and gaming entertainment company BetMGM to offer sports betting and iGaming across three of its cruise… [+2102 chars]",
        },
        {
          source: { id: null, name: "Tech Xplore" },
          author: "Ingrid Fadelli",
          title: "A technique to teach bimanual robots stir-fry cooking",
          description:
            "As robots make their way into a variety of real-world environments, roboticists are trying to ensure that they can efficiently complete a growing number of tasks. For robots that are designed to assist humans in their homes, this includes household chores, su…",
          url: "https://techxplore.com/news/2022-06-technique-bimanual-robots-stir-fry-cooking.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/hires/2022/a-technique-to-teach-b.jpg",
          publishedAt: "2022-06-17T13:30:01Z",
          content:
            "As robots make their way into a variety of real-world environments, roboticists are trying to ensure that they can efficiently complete a growing number of tasks. For robots that are designed to assi… [+4814 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "Major eBetting Companies Working Hard to Simplify Operations for a More Pleasurable Experience",
          description:
            "FinancialNewsMedia.com News Commentary PALM BEACH, Fla., June 17, 2022 /PRNewswire/ -- The global sports betting markets, unlike most, grew during the pandemic and are projected to continue to grow for years to come. The demand for sports betting is driven by…",
          url: "https://www.prnewswire.com/news-releases/major-ebetting-companies-working-hard-to-simplify-operations-for-a-more-pleasurable-experience-301570184.html",
          urlToImage: null,
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "FinancialNewsMedia.com\r\n News Commentary\r\nPALM BEACH, Fla., June 17, 2022 /PRNewswire/ -- The global sports betting markets, unlike most, grew during the pandemic and are projected to continue to gro… [+10731 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "BETMGM AND CARNIVAL CORPORATION PARTNER TO OFFER CRUISE SHIP GAMING",
          description:
            "Collaboration between industry leaders brings innovative sports betting and iGaming experiences to cruise ship guests JERSEY CITY, N.J., June 17, 2022 /PRNewswire/ -- BetMGM, a leading sports betting and iGaming operator, announced today a new partnership wit…",
          url: "https://www.prnewswire.com/news-releases/betmgm-and-carnival-corporation-partner-to-offer-cruise-ship-gaming-301569556.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1393945/betmgm_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "Collaboration between industry leaders brings innovative sports betting and iGaming experiences to cruise ship guests \r\nJERSEY CITY, N.J., June 17, 2022 /PRNewswire/ -- BetMGM, a leading sports betti… [+4783 chars]",
        },
        {
          source: { id: null, name: "MarketWatch" },
          author: "Tomi Kilgore",
          title: "Vince McMahon to appear live on WWE's SmackDown",
          description:
            'Shares of World Wrestling Entertainment Inc. slumped 2.6% in premarket trading Friday, after the media and entertainment company said Vince McMahon will appear live on its "SmackDown" TV event. The show will air Friday at 8 p.m. Eastern on FOX. Earlier, WWE d…',
          url: "https://www.marketwatch.com/story/vince-mcmahon-to-appear-live-on-wwes-smackdown-2022-06-17",
          urlToImage:
            "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
          publishedAt: "2022-06-17T13:29:39Z",
          content:
            'Shares of World Wrestling Entertainment Inc. \r\n WWE,\r\n -1.40%\r\nslumped 2.6% in premarket trading Friday, after the media and entertainment company said Vince McMahon will appear live on its "SmackDow… [+536 chars]',
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Kevin P. Curran",
          title: "LVMH is a ‘structural outperformer’ - Morgan Stanley",
          description:
            "LVMH (LVMHF) is a cut above its contemporaries in luxury retail, according to Morgan Stanley.“The desirability of LVMH's key brands remain high,” Equity Analyst Edouard Aubin wrote...",
          url: "https://seekingalpha.com/news/3849607-lvmh-is-a-structural-outperformer-morgan-stanley",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1329025442/image_1329025442.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:26:56Z",
          content:
            "Pascal Le Segretain/Getty Images Entertainment\r\nLVMH (OTCPK:LVMHF) is a cut above its contemporaries in luxury retail, according to Morgan Stanley.\r\nThe desirability of LVMH's key brands remain high,… [+2384 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Mark Schiavo",
          title: "DoorDash: Dash Away From This Stock",
          description:
            "The pandemic's lockdowns and stimulus checks caused DoorDash to see inflated demand for multiple periods. See why DASH stock is a sell, considering recession fears.",
          url: "https://seekingalpha.com/article/4518956-doordash-dash-away-from-this-stock",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1147932669/image_1147932669.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:26:54Z",
          content:
            "Tibrina Hobson/Getty Images Entertainment\r\nDoorDash (NYSE:DASH) grew massively during the pandemic due to consumers being stuck at home and cash rich from continuous stimulus checks. This caused the … [+8369 chars]",
        },
        {
          source: { id: null, name: "seattlepi.com" },
          author: "By MICHELLE CHAPMAN, AP Business Writer",
          title: "Investigation at WWE upends leadership; McMahon steps aside",
          description:
            "Vince McMahon is stepping down as CEO and chairman of WWE during an an investigation into alleged misconduct involving the longtime leader and public face of the organization.\nMcMahon will continue to oversee WWE’s creative content during the investigation, W…",
          url: "https://www.seattlepi.com/news/article/Investigation-at-WWE-upends-leadership-McMahon-17248364.php",
          urlToImage:
            "https://s.hdnux.com/photos/01/26/17/55/22608716/3/rawImage.jpg",
          publishedAt: "2022-06-17T13:24:46Z",
          content:
            "Vince McMahon is stepping down as CEO and chairman of WWE during an an investigation into alleged misconduct involving the longtime leader and public face of the organization.McMahon will continue to… [+1513 chars]",
        },
        {
          source: { id: null, name: "Bloody Disgusting" },
          author: "Alex DiVincenzo",
          title:
            "5 of This Week’s Coolest Horror Collectibles Including a “Ghostface Takes Manhattan” Poster",
          description:
            "Killer Collectibles highlights five of the most exciting new horror products released each and every week, from toys and apparel to artwork, records, and much more. Here are the coolest horror collectibles unveiled this week! Scream 6 Print from House of Myst…",
          url: "https://bloody-disgusting.com/the-further/3719512/5-of-this-weeks-coolest-horror-collectibles-including-a-ghostface-takes-manhattan-poster/",
          urlToImage:
            "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/06/ghosty.png?resize=1000%2C565&ssl=1",
          publishedAt: "2022-06-17T13:21:06Z",
          content:
            "Killer Collectibles highlights five of the most exciting new horror products released each and every week, from toys and apparel to artwork, records, and much more.\r\nHere are the coolest horror colle… [+2609 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title: "Mr. McMahon to Appear on SmackDown® Tonight",
          description:
            "STAMFORD, Conn.--(BUSINESS WIRE)--WWE (NYSE: WWE) today announced that Mr. McMahon will appear on SmackDown tonight at 8 pm ET live on FOX. About WWE WWE, a publicly traded company (NYSE: WWE), is an integrated media organization and recognized leader in glob…",
          url: "https://www.businesswire.com/news/home/20220617005253/en/Mr.-McMahon-to-Appear-on-SmackDown%C2%AE-Tonight",
          urlToImage:
            "https://mms.businesswire.com/media/20220617005253/en/441236/23/WWE_Logo_Primary_Light_Background_Black-Red.jpg",
          publishedAt: "2022-06-17T13:20:43Z",
          content:
            "STAMFORD, Conn.--(BUSINESS WIRE)--WWE (NYSE: WWE) today announced that Mr. McMahon will appear on SmackDown tonight at 8 pm ET live on FOX.\r\nAbout WWE\r\nWWE, a publicly traded company (NYSE: WWE), is … [+5204 chars]",
        },
        {
          source: { id: null, name: "The Guardian" },
          author: "Vincent Ni",
          title:
            "Heaven Supermarket: the Beijing bar at centre of Covid outbreak",
          description:
            "Self-service bar popular with locals and foreigners has been shut down after being linked to hundreds of casesHeaven Supermarket’s ability to attract young Chinese customers and foreigners has always been viewed with envy by its competitor bars in the Chinese…",
          url: "https://amp.theguardian.com/world/2022/jun/17/heaven-supermarket-beijing-bar-centre-covid-outbreak",
          urlToImage:
            "https://i.guim.co.uk/img/media/40553299e07d59e0019fbd2c8710f91d228b7eb1/0_0_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1c65bf7262cae4124752afaf991ab494",
          publishedAt: "2022-06-17T13:19:31Z",
          content:
            "Heaven Supermarkets ability to attract young Chinese customers and foreigners has always been viewed with envy by its competitor bars in the Chinese capital.\r\nLocated in one of the busiest nightlife … [+2943 chars]",
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Clare Duffy",
          title:
            "Elon Musk pressured Twitter to give him access to a 'firehose' of data to evaluate bots. Now what?",
          description:
            "Elon Musk spent weeks raising alarms that Twitter may have far more fake, spam and bot accounts than previously disclosed and threatening to abandon his $44 billion deal to buy the company if it didn't provide him with more information to evaluate the matter.",
          url: "https://www.cnn.com/2022/06/17/tech/elon-musk-twitter-bots/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/220615144004-04-elon-musk-file.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2022-06-17T13:19:08Z",
          content:
            "Elon Musk spent weeks raising alarms that Twitter may have far more fake, spam and bot accounts than previously disclosed and threatening to abandon his $44 billion deal to buy the company if it didn… [+7113 chars]",
        },
        {
          source: { id: null, name: "Comicsbeat.com" },
          author: "Taimur Dar",
          title: "The comics industry says goodbye to Tim Sale",
          description:
            "The industry reacts to the tragic passing of legendary comic artist Tim Sale best known for his work on Batman: The Long Halloween and more.",
          url: "https://www.comicsbeat.com/the-comics-industry-says-goodbye-to-tim-sale/",
          urlToImage:
            "https://www.comicsbeat.com/wp-content/uploads/2022/06/Tim-Sale-Feature.jpg",
          publishedAt: "2022-06-17T13:15:21Z",
          content:
            "Legendary and Eisner award-winning comic artist Tim Sale passed away yesterday. Earlier this week DC Comics Publisher/CCO Jim Leeshared on social media that Sale had been admitted to the hospital wit… [+6743 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Double Dividend Stocks",
          title:
            "Ares Capital: 10% Yield, Benefits From Rising Rates, Analyst Upgrades, 5% Discount",
          description:
            "ARCC yields 10.03%, with 1.2X trailing dividend coverage. ARCC got 2 analyst upgrades in late April to outperform and overweight. See why we rate ARCC a buy.",
          url: "https://seekingalpha.com/article/4518812-ares-10-yield-benefits-rising-rates-analyst-upgrades-5-discount",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1210130738/image_1210130738.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:15:00Z",
          content:
            "8vFanI/iStock via Getty Images\r\nLooking for a high yield income vehicle that will actually benefit for rising interest rates? You should check out the Business Development Corp. industry. Known as BD… [+8797 chars]",
        },
        {
          source: { id: "reuters", name: "Reuters" },
          author: null,
          title:
            "Demystifying NFTs and intellectual property: trademark and copyright concerns - Reuters",
          description:
            "Although NFT technology is relatively new, the intellectual property laws governing it are not. Nevertheless, increased popularity of innovative technologies like NFTs, as brands expand their presence in the metaverse, can raise novel legal questions.",
          url: "https://www.reuters.com/legal/legalindustry/demystifying-nfts-intellectual-property-trademark-copyright-concerns-2022-06-17/",
          urlToImage:
            "https://www.reuters.com/resizer/a6kWku4hoSJZdTUXu9RyO6w1VbY=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V6DIS4RTBFIZBCIIQ3IDRDSVOY.jpg",
          publishedAt: "2022-06-17T13:15:00Z",
          content:
            "June 17, 2022 - Although NFT technology is relatively new, the intellectual property laws governing it are not. Nevertheless, increased popularity of innovative technologies like NFTs, as brands expa… [+9037 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "MGM RESORTS INTERNATIONAL CFO TO SPEAK AT JEFFERIES GLOBAL CONSUMER CONFERENCE",
          description:
            'LAS VEGAS, June 17, 2022 /PRNewswire/ -- MGM Resorts International (NYSE: MGM) ("MGM Resorts" or the "Company") will participate in the Jefferies Global Consumer Conference on Monday, June 20, 2022. MGM Resorts CFO Jonathan Halkyard will speak in a session th…',
          url: "https://www.prnewswire.com:443/news-releases/mgm-resorts-international-cfo-to-speak-at-jefferies-global-consumer-conference-301570040.html",
          urlToImage: null,
          publishedAt: "2022-06-17T13:15:00Z",
          content:
            'LAS VEGAS, June 17, 2022 /PRNewswire/ -- MGM Resorts International (NYSE: MGM) ("MGM Resorts" or the "Company") will participate in the Jefferies Global Consumer Conference on Monday, June 20, 2022. … [+1970 chars]',
        },
      ],
    };
  
    ENTERTAINMENT_1(data.articles);
    ENTERTAINMENT_2(data.articles);
    ENTERTAINMENT_3(data.articles);
  };
  
  getData6();
  
  function getData7() {
    let data = {
      status: "ok",
      totalResults: 91,
      articles: [
        {
          source: { id: null, name: "Freerepublic.com" },
          author: "Washington Free Beacon",
          title:
            "Double Standards: Princeton Turns Blind Eye To Plagiarism From Woke Professor",
          description:
            "University’s approach to Kevin Kruse provides stark contrast to its treatment of Joshua Katz.. Princeton University learned in December about plagiarism allegations against one of its star progressive professors, emails obtained by the Washington Free Beacon …",
          url: "https://freerepublic.com/focus/f-news/4071776/posts",
          urlToImage: null,
          publishedAt: "2022-06-17T13:34:09Z",
          content:
            "Skip to comments.\r\nDouble Standards: Princeton Turns Blind Eye To Plagiarism From Woke ProfessorWashington Free Beacon ^\r\n | June 16, 2022\r\n | Aaron Sibarium \r\nPosted on 06/17/2022 6:34:09 AM PDT by … [+4777 chars]",
        },
        {
          source: { id: null, name: "Freerepublic.com" },
          author: "Times Union",
          title:
            "Health insurers seeking major rate increases in New York for 2023",
          description:
            "ALBANY - Add your health insurance premiums to the long list of necessities that are going to get harder to pay for amid rampant inflation, the pandemic and war in Ukraine. Heath insurers serving individuals and companies in the state are requesting increases…",
          url: "https://freerepublic.com/focus/f-news/4071775/posts",
          urlToImage: null,
          publishedAt: "2022-06-17T13:30:23Z",
          content:
            "Skip to comments.\r\nHealth insurers seeking major rate increases in New York for 2023Times Union ^\r\n | June 17, 2022\r\n | Larry Rulison\r\nPosted on 06/17/2022 6:30:23 AM PDT by 1Old Pro\r\nALBANY - Add yo… [+2753 chars]",
        },
        {
          source: { id: null, name: "BetaNews" },
          author: "Ian Barker",
          title: "New UK data laws set to make annoying cookie pop-ups crumble",
          description:
            "Website pop-ups asking you to consent to cookies have become a regular -- if irritating -- feature for European internet users since the introduction of GDPR in 2018. As part of a post Brexit shake up of data law the UK government has announced that its Data …",
          url: "https://betanews.com/2022/06/17/new-uk-data-laws-set-to-make-annoying-cookie-pop-ups-crumble/",
          urlToImage:
            "https://betanews.com/wp-content/uploads/2012/03/cookies-crumbs-e1332882255359-50x50.jpg",
          publishedAt: "2022-06-17T13:21:04Z",
          content:
            "Website pop-ups asking you to consent to cookies have become a regular -- if irritating -- feature for European internet users since the introduction of GDPR in 2018.\r\nAs part of a post Brexit shake … [+3538 chars]",
        },
        {
          source: { id: "independent", name: "Independent" },
          author: "Shweta Sharma",
          title:
            "Agnipath: One dead as trains set on fire across India amid protests against army reforms",
          description:
            "Government announces one-time relaxation to age limit for applicants to quell protests",
          url: "https://www.independent.co.uk/asia/india/secunderabad-railway-station-agnipath-protests-b2103250.html",
          urlToImage:
            "https://static.independent.co.uk/2022/06/17/09/urnpublicidap.org210d3cef56d14da1bf5acce6fec2a014.jpg?quality=75&width=1200&auto=webp",
          publishedAt: "2022-06-17T13:18:43Z",
          content:
            "A protester died and several others were injured after police in Indias southern Telangana state allegedly opened fire on them as the country continued to witness anger over recent reforms announced … [+4280 chars]",
        },
        {
          source: { id: null, name: "Freerepublic.com" },
          author: "Fox News",
          title:
            "Biden, Pelosi, other top Dems sent kids to private school but oppose school choice",
          description:
            "To them, apparently, only rich people should have school choice.. School choice has become a hot-button issue after the COVID-19 lockdowns shined a light on the scope of the government’s authority and gave parents a window into public school curricula. Many p…",
          url: "https://freerepublic.com/focus/f-news/4071765/posts",
          urlToImage: null,
          publishedAt: "2022-06-17T13:03:10Z",
          content:
            "Skip to comments.\r\nBiden, Pelosi, other top Dems sent kids to private school but oppose school choiceFox News ^\r\n | June 16, 2022\r\n | Jessica Chasmar | \r\nPosted on 06/17/2022 6:03:10 AM PDT by george… [+3850 chars]",
        },
        {
          source: { id: "usa-today", name: "USA Today" },
          author:
            "Asbury Park Press, Alex Biese and Baylee DeMuth, Asbury Park Press",
          title:
            "'Love always wins': Gay fathers discuss joys and challenges of parenting in modern America",
          description:
            "There are 2 million to 3.7 million American children with an LGBTQ parent, and approximately 191,000 children being raised by same-sex parents.",
          url: "https://www.usatoday.com/story/life/health-wellness/2022/06/17/gay-dads-joys-challenges-parenting-america-fathers-day/7632405001/",
          urlToImage:
            "https://www.gannett-cdn.com/presto/2022/06/09/PAPP/5f8b87b7-1a16-4f52-8341-97a29f00a4e9-sh060822gaydads008.JPG?auto=webp&crop=5663,3186,x0,y0&format=pjpg&width=1200",
          publishedAt: "2022-06-17T13:00:44Z",
          content:
            "This year, Father’s Day will be particularly poignant for Rob Lyons and Carl Tanis.\r\nThe New Jersey couple have been together for 16 years, and married for nine. Sunday, June 19, marks their first Fa… [+8362 chars]",
        },
        {
          source: { id: null, name: "Jalopnik" },
          author: "Owen Bellwood",
          title: "What Car Screams 'America' Whenever You See it?",
          description:
            "America, what a country. Land of the free, home of the brave. It’s a proud nation and one whose inhabitants are always eager to point out its achievements to any passer-by who’ll spare a moment to listen. And pretty high on that list of achievements are some …",
          url: "https://jalopnik.com/what-car-screams-america-whenever-you-see-it-1849075765",
          urlToImage:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e24b393022561464bd4d364e3f79ae58.jpg",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "America, what a country. Land of the free, home of the brave. Its a proud nation and one whose inhabitants are always eager to point out its achievements to any passer-by wholl spare a moment to list… [+1565 chars]",
        },
        {
          source: { id: null, name: "Dianeravitch.net" },
          author: "dianeravitch",
          title:
            "Nora De La Cour: How Privatizers Are Using Culture Wars to Advance Their Agenda",
          description:
            "Nora De La Cour is a high school social worker and former teacher in Massachusetts. She writes frequently about the attacks on public schools. In this brilliant article, which appeared in Jacobin, she shows how the privatizatizers have exploited the culture w…",
          url: "https://dianeravitch.net/2022/06/17/nora-de-la-cour-how-privatizers-are-using-culture-wars-to-advance-their-agenda/",
          urlToImage:
            "https://greatschoolwars.files.wordpress.com/2017/12/diane.jpg?w=200",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Nora De La Cour is a high school social worker and former teacher in Massachusetts. She writes frequently about the attacks on public schools. In this brilliant article, which appeared in Jacobin, sh… [+7439 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "S.PELLEGRINO YOUNG CHEF ACADEMY PRESENTS THE GLOBAL JURY FOR THE GRAND FINALE OF S.PELLEGRINO YOUNG CHEF ACADEMY COMPETITION 2022-23",
          description:
            "The Competition will offer to young chefs under the age of 30 a unique opportunity to enter the Academy and embark on an inspiring and educational journey. There is time until June 30, 2022 to register for the Competition. MILAN, June 17, 2022 /PRNewswire/ --…",
          url: "https://www.prnewswire.com/news-releases/spellegrino-young-chef-academy-presents-the-global-jury-for-the-grand-finale-of-spellegrino-young-chef-academy-competition-2022-23-301569651.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1840622/S_Pellegrino_Seven_Sages.jpg?p=facebook",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "During the Regional Finals phase, 170 young chefs from around the world will compete in live cooking competitions in front of local panel of jurors from participating countries in the fifteen differe… [+8890 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "ACCESSWIRE",
          title:
            "Biohong Group Launches the World's First Stem Cell-based 3D Printing Artificial Meat, Creating a New Height for Both Stem Cell Engineering Meat and Plant-based Artificial Meat",
          description:
            'NEW YORK, NY / ACCESSWIRE / June 17, 2022 / On June 16, 2022, with the theme of "Future Meat Diet Defines New Ecology", the First National Summit Forum on...',
          url: "https://finance.yahoo.com/news/biohong-group-launches-worlds-first-130000185.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/WBef9l6L_BghZJxyNJlk0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/k2axF0OkyOFg9h.HQXh3hQ--~B/aD04NDM7dz0xMjY1O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/accesswire.ca/bda33aa64225a1a6d0f11528d265718f",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            'NEW YORK, NY / ACCESSWIRE / June 17, 2022 / On June 16, 2022, with the theme of "Future Meat Diet Defines New Ecology", the First National Summit Forum on the Integration and Development of Organizat… [+5558 chars]',
        },
        {
          source: { id: null, name: "Patheos" },
          author: "Roger E. Olson",
          title: "Toxic Masculinity or Aspirational Masculinity?",
          description:
            "Toxic Masculinity or Aspirational Masculinity? *Note to would-be commenters: This is not a discussion board; it is a place for me to share my opinions and have civil, respectful and constructive conversations with others about them. Comments that are overly l…",
          url: "https://www.patheos.com/blogs/rogereolson/2022/06/toxic-masculinity-or-aspirational-masculinity/",
          urlToImage:
            "https://wp-media.patheos.com/blogs/sites/21/2017/10/pinewood-derby-736434_640-300x158.jpg",
          publishedAt: "2022-06-17T12:56:05Z",
          content:
            "Toxic Masculinity or Aspirational Masculinity?June 17, 2022Roger E. Olson\r\nToxic Masculinity or Aspirational Masculinity?\r\n*Note to would-be commenters: This is not a discussion board; it is a place … [+4117 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "Graham Corporation Publishes Inaugural Sustainability Factsheet",
          description:
            "BATAVIA, N.Y.--(BUSINESS WIRE)--Graham Corporation (NYSE: GHM) Publishes Inaugural Sustainability Factsheet",
          url: "https://www.businesswire.com/news/home/20220617005048/en/Graham-Corporation-Publishes-Inaugural-Sustainability-Factsheet",
          urlToImage:
            "https://mms.businesswire.com/media/20220617005048/en/1480889/23/Graham_Corp_Logo.jpg",
          publishedAt: "2022-06-17T12:55:34Z",
          content:
            "BATAVIA, N.Y.--(BUSINESS WIRE)--Graham Corporation (NYSE: GHM), a global leader in the design and manufacture of mission critical fluid, power, heat transfer and vacuum technologies for the defense, … [+5409 chars]",
        },
        {
          source: { id: null, name: "Dazed" },
          author: "Günseli Yalcinkaya",
          title:
            "Hans Ulrich Obrist on how video games are revolutionising the art world",
          description:
            "As the new exhibition WORLDBUILDING: Gaming and Art in the Digital Age opens, curator Hans Ulrich Obrist discusses the growing role of video games in our everyday lives",
          url: "https://www.dazeddigital.com/art-photography/article/56316/1/hans-ulrich-obrist-interview-worldbuilding-gaming-art-digital-age-exhibition",
          urlToImage:
            "https://dazedimg-dazedgroup.netdna-ssl.com/1200/155-0-1620-1080/azure/dazed-prod/1320/5/1325670.jpg",
          publishedAt: "2022-06-17T12:55:00Z",
          content:
            "Is this hell? asks the blue-haired protagonist in digital artist LuYangs work The Great Adventure of Material World. Set against an infinite sea of kawaii creatures, the game-film is a kaleidoscopic … [+10678 chars]",
        },
        {
          source: { id: null, name: "Slashdot.org" },
          author: "feedfeeder",
          title:
            "Engadget Podcast: Google's AI isn't sentient but we must examine the ethics",
          description:
            "This week, Devindra and Cherlynn dig into the story around Google engineer Blake Lemoine’s interview with the Washington Post and his belief that the company’s LaMDA language model is alive. What does it mean for AI (or anything else) to have consciousness? D…",
          url: "https://slashdot.org/firehose.pl?op=view&amp;id=163394528",
          urlToImage: null,
          publishedAt: "2022-06-17T12:53:32Z",
          content:
            "This week, Devindra and Cherlynn dig into the story around Google engineer Blake Lemoine’s interview with the Washington Post and his belief that the company’s LaMDA language model is alive. What doe… [+1334 chars]",
        },
        {
          source: { id: null, name: "AllAfrica - Top Africa News" },
          author: "GhanaToday",
          title: "Ghana: Mrs Kathleen Addy Appointed Chairperson of NCCE",
          description:
            "[GhanaToday] President Nana Addo Dankwa Akufo-Addo has said the National Commission on Civic Education's (NCCE) responsibility to establish and deepen the culture of constitutional awareness is imperative.",
          url: "https://allafrica.com/stories/202206170561.html",
          urlToImage:
            "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
          publishedAt: "2022-06-17T12:49:59Z",
          content:
            "President Nana Addo Dankwa Akufo-Addo has said the National Commission on Civic Education's (NCCE) responsibility to establish and deepen the culture of constitutional awareness is imperative.\r\nPresi… [+3346 chars]",
        },
        {
          source: { id: null, name: "AllAfrica - Top Africa News" },
          author: "allAfrica",
          title:
            "Africa: 'Sexuality Was Fluid, Tolerant and Not Penalised Before Colonialism'",
          description:
            "[allAfrica] Johannesburg -- In April 2022, the Centre for Human Rights (CHR) and the Centre for Sexualities, AIDS, and Gender (CSA&G) at the University of Pretoria together with the Center for Gender Studies and Feminist Futures (CGS) and the Center for Confl…",
          url: "https://allafrica.com/stories/202206170538.html",
          urlToImage:
            "https://cdn05.allafrica.com/download/pic/main/main/csiid/00541045:e5e4a072c670ab73658d057f809629eb:arc614x376:w1200.jpg",
          publishedAt: "2022-06-17T12:41:29Z",
          content:
            "Johannesburg — In April 2022, the Centre for Human Rights (CHR) and the Centre for Sexualities, AIDS, and Gender (CSA&amp;G) at the University of Pretoria together with the Center for Gender Studies … [+8424 chars]",
        },
        {
          source: { id: null, name: "Freerepublic.com" },
          author: "https://trendingpolitics.com",
          title:
            "Woman Probed By FBI For Selling Ashley Biden’s Lost Journal Which Recalls Some Disturbing Details",
          description:
            "A Floridian woman who found Joe Biden’s daughter, Ashley’s private diary discarded in a half-way house in Palm Beach is being investigated by the FBI for selling the material. The diary contains some shocking content including Ashley revealing how she used to…",
          url: "https://freerepublic.com/focus/f-news/4071761/posts",
          urlToImage: null,
          publishedAt: "2022-06-17T12:40:19Z",
          content:
            "Skip to comments.\r\nWoman Probed By FBI For Selling Ashley Bidens Lost Journal Which Recalls Some Disturbing Detailshttps://trendingpolitics.com ^\r\n | 17 June, 2022\r\n | by Jo Marney\r\nPosted on 06/17/2… [+9004 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "PR Newswire",
          title:
            "EY Announces S. Mark McKenna, MD, MBA of OVME as an Entrepreneur Of The Year® 2022 Southeast Award Winner",
          description:
            "Ernst & Young LLP (EY US) today announced that Chairman, Founder and Chief Medical Officer S. Mark McKenna, MD, MBA of OVME was named an Entrepreneur Of The ...",
          url: "https://finance.yahoo.com/news/ey-announces-mark-mckenna-md-123800739.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/Wrs.jCz6nB94MX7eW1GAJQ--~B/aD00MDA7dz0yNjc7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/4c6ea02bcb22bdcdf1f952c927d472bc",
          publishedAt: "2022-06-17T12:38:00Z",
          content:
            "ATLANTA, June 17, 2022 /PRNewswire/ -- Ernst &amp; Young LLP (EY US) today announced that Chairman, Founder and Chief Medical Officer S. Mark McKenna, MD, MBA of OVME was named an Entrepreneur Of The… [+5659 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "EY Announces S. Mark McKenna, MD, MBA of OVME as an Entrepreneur Of The Year® 2022 Southeast Award Winner",
          description:
            "ATLANTA, June 17, 2022 /PRNewswire/ -- Ernst & Young LLP (EY US) today announced that Chairman, Founder and Chief Medical Officer S. Mark McKenna, MD, MBA of OVME was named an Entrepreneur Of The Year® 2022 Southeast Award winner. Entrepreneur Of The Year is …",
          url: "https://www.prnewswire.com/news-releases/ey-announces-s-mark-mckenna-md-mba-of-ovme-as-an-entrepreneur-of-the-year-2022-southeast-award-winner-301570057.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1841984/OVME_S_Mark_McKenna.jpg?p=facebook",
          publishedAt: "2022-06-17T12:38:00Z",
          content:
            "ATLANTA, June 17, 2022 /PRNewswire/ -- Ernst &amp; Young LLP (EY US) today announced that Chairman, Founder and Chief Medical Officer S. Mark McKenna, MD, MBA of OVME was named an Entrepreneur Of The… [+5429 chars]",
        },
        {
          source: { id: null, name: "The Conversation Africa" },
          author:
            "Julian C. Chambliss, Professor of English, Michigan State University",
          title: "What is Afrofuturism? An English professor explains",
          description:
            "Even though Afrofuturist works are set in fictional worlds, they provide a blueprint for social, political and economic systems free from exploitation and oppression.",
          url: "https://theconversation.com/what-is-afrofuturism-an-english-professor-explains-183707",
          urlToImage:
            "https://images.theconversation.com/files/469013/original/file-20220615-9155-71yxl3.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3385%2C1692&q=45&auto=format&w=1356&h=668&fit=crop",
          publishedAt: "2022-06-17T12:33:23Z",
          content:
            "Entertainer and author Janelle Monáe performs during the 2019 Grammys flanked by android-like backup dancers. Kevin Winter/Getty Images\r\nThe new sci-fi musical “Neptune Frost,” set in a Rwandan villa… [+3757 chars]",
        },
      ],
    };
  
    CULTUREANDSOCIETY(data.articles);
  }
  
  getData7();
  
  function getData8() {
    let data = {
      status: "ok",
      totalResults: 200,
      articles: [
        {
          source: { id: "associated-press", name: "Associated Press" },
          author: "Calvin Woodward",
          title:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power...",
          description:
            "Watergate 50th meets Jan. 6. Common thread: Thirst for power...\r\n\n \n \n \n (First column, 5th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Post-scandal reforms may frame DOJ decision over prosecuting Trump...\r\nGinni Thomas emails with lawyer add to tumult at Supre…",
          url: "https://apnews.com/article/capitol-siege-ivanka-trump-congress-donald-government-and-politics-570444a76bacec6bcfaa507cae7ea452",
          urlToImage:
            "https://storage.googleapis.com/afs-prod/media/25fdcb547d124f34a24d949b650fb1dc/3000.jpeg",
          publishedAt: "2022-06-17T13:37:37Z",
          content:
            "WASHINGTON (AP) The wreckage of Watergate and Jan. 6 are a half-century apart yet rooted in the same ancient thirst for power at any cost.\r\nTwo presidents, wily and profane, tried an end run around d… [+8289 chars]",
        },
        {
          source: { id: null, name: "tomandlorenzo.com" },
          author: "Lorenzo Marquez",
          title: "T LOunge for June 17th, 2022",
          description:
            "Rinela Bar and Restaurant – Crete, Greece   You can hear these pictures, can’t you? We won’t ruin the effect with our words. It’s FRIDAY, you made it, now grab a seat.   ‘Blonde’ Trailer: Ana de Armas Stuns as Marilyn Monroe in Netflix’s NC-17 Drama Netflix h…",
          url: "https://tomandlorenzo.com/2022/06/t-lounge-for-june-17th-2022/",
          urlToImage:
            "https://tomandlorenzo.com/wp-content/uploads/2022/06/Bars-Restaurants-Cafes-Lounges-Clubs-6-17-2022-Tom-Lorenzo-Site-1.jpg",
          publishedAt: "2022-06-17T13:30:58Z",
          content:
            "Rinela Bar and Restaurant – Crete, Greece\r\nYou can hear these pictures, can’t you? We won’t ruin the effect with our words. It’s FRIDAY, you made it, now grab a seat.\r\nBlonde Trailer: Ana de Armas St… [+16946 chars]",
        },
        {
          source: { id: null, name: "Sylhetmirror.com" },
          author: "Enamul Haque Renu",
          title:
            "“We should Eat at the same time every day to set our biological clock”: Somya Luhadia",
          description:
            "Nutrition expert Somya Luhadia says that Our body doesn’t understand the clock, it understands our actions at a particular time which means if we recurrently eat at 7:00 pm it will set a biological clock for itself & we will feel hungry at the same time every…",
          url: "https://sylhetmirror.com/2022/06/17/we-should-eat-at-the-same-time-every-day-to-set-our-biological-clock-somya-luhadia/",
          urlToImage:
            "https://sylhetmirror.com/files/uploads/2022/06/w23e3r4.jpg",
          publishedAt: "2022-06-17T13:30:51Z",
          content:
            "Indian woman tasting strawberry while preparing salad in a luxury kitchen\r\nNutrition expert Somya Luhadia says that Our body doesnt understand the clock, it understands our actions at a particular ti… [+1585 chars]",
        },
        {
          source: { id: null, name: "Biblicalarchaeology.org" },
          author: "Nathan Steinmeyer",
          title: "Drought Reveals 3,400-Year-Old Lost City",
          description:
            "Droughts across Iraq have been a major source of humanitarian concern, but they have also provided archaeologists with a rare opportunity to excavate an ancient […]\nThe post Drought Reveals 3,400-Year-Old Lost City appeared first on Biblical Archaeology Socie…",
          url: "https://www.biblicalarchaeology.org/daily/ancient-cultures/ancient-near-eastern-world/3400-year-old-lost-city/",
          urlToImage:
            "https://www.biblicalarchaeology.org/wp-content/uploads/2022/06/The-archaeological-site-of-Kemune-in-the-dried-up-area-of-the-Mosul-reservoir.jpg",
          publishedAt: "2022-06-17T13:30:16Z",
          content:
            "Archaeologists race to excavate an ancient city in northern Iraq\r\nNathan Steinmeyer June 17, 2022 0 Comments 10 views Share\r\nThe archaeological site of Kemune, the location of the lost city of Zakhik… [+4353 chars]",
        },
        {
          source: { id: null, name: "Memeorandum.com" },
          author: null,
          title:
            "They Will Do It Again - Republicans have not been chastened by the revelations of the January 6 committee. (Jonathan Chait/New York Magazine)",
          description:
            "Jonathan Chait / New York Magazine:\nThey Will Do It Again  —  Republicans have not been chastened by the revelations of the January 6 committee.  —  The January 6 hearings are about the events of a single day, but they implicate a much broader phenomenon: the…",
          url: "https://www.memeorandum.com/220617/p32",
          urlToImage:
            "https://pyxis.nymag.com/v1/imgs/7e7/d64/58fa11e516f4f288dce038270038408d74-col1-h-15697810.2x.rsocial.w600.jpg",
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]",
        },
        {
          source: { id: null, name: "Teen Vogue" },
          author: "Brittney McNamara",
          title:
            "Kesha Won't Label Her Sexuality Because She's \"Open to it All\"",
          description:
            "Read what Kesha had to say about her sexuality, and why she just loves people, in her Pride Month post.",
          url: "https://www.teenvogue.com/story/kesha-said-shes-not-gay-not-straight-in-pride-month-post",
          urlToImage:
            "https://assets.teenvogue.com/photos/62ac8033e90f72b89c8add4d/16:9/w_1280,c_limit/GettyImages-1201344630.jpg",
          publishedAt: "2022-06-17T13:29:57Z",
          content:
            "This Pride Month, Kesha is reminding her fans that existing exactly how they are is good enough, labels or not. \r\nIn a post on Instagram, Kesha opened up about her sexuality, saying she doesn't know … [+1363 chars]",
        },
        {
          source: { id: null, name: "Page Six" },
          author: "Leah Bitsky",
          title:
            "Doja Cat undergoes second throat surgery, shares hospital photos",
          description:
            "Due to the surgery, Doja had to cancel several performances this summer, including her tour with The Weeknd and some festivals, as she recovers.",
          url: "https://pagesix.com/2022/06/17/doja-cat-has-second-throat-surgery-shares-hospital-photos/",
          urlToImage:
            "https://pagesix.com/wp-content/uploads/sites/3/2022/06/doja-cat-99.jpg?quality=75&strip=all&w=1200",
          publishedAt: "2022-06-17T13:25:54Z",
          content:
            "Cat got her throat.\r\nDoja Cat shared an update from the hospital after undergoing throat surgery to remove an abscess that was causing severe pain.\r\nThe “Say So” singer, 26, tweeted photos Thursday o… [+2496 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title: "QNET Takes Home Eleven Awards for Ground-breaking Campaigns",
          description:
            "HONG KONG, June 17, 2022 /PRNewswire/ -- Asian direct selling giant QNET has once again proven itself as one of the industry's most innovative and creative businesses by sweeping multiple accolades at various award competitions in the last few months. QNET ha…",
          url: "https://www.prnewswire.com/news-releases/qnet-takes-home-eleven-awards-for-ground-breaking-campaigns-301570203.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1842146/QNET_Mena_Stevie_Awards_2022.jpg?p=facebook",
          publishedAt: "2022-06-17T13:22:00Z",
          content:
            "QNET's social media campaign around its virtual convention known as the V-Convention Connect, which attracted a whopping half a million viewers from over fifty countries to the convention, swept up t… [+8273 chars]",
        },
        {
          source: { id: null, name: "Girlsofacertainage.com" },
          author: "Kim France",
          title: "Friday links",
          description:
            "A look back at the messy-but-glamorous life of Gloria Vanderbilt. (Messy Nessy Chic) I’m down for this Netflix adaptation of Jane Austen’s Persuasion. (YouTube) We’ve got legendary fashion journalist Teri Agins on Everything is Fine this week, and we’re talki…",
          url: "https://www.girlsofacertainage.com/links/friday-links-101/",
          urlToImage:
            "https://www.girlsofacertainage.com/wp-content/uploads/2022/06/gloria-vanderbilt.jpeg",
          publishedAt: "2022-06-17T13:20:03Z",
          content:
            "Kim France\r\nI was born in Houston, Texas in 1964 and have lived in New York City since 1988. I had a long career in magazines, working at Sassy, Elle, New York, and Spin, and in 2000, I founded Lucky… [+39 chars]",
        },
        {
          source: { id: null, name: "Harpers.org" },
          author: "Ottessa Moshfegh",
          title: "Ottessa Moshfegh on Lapvona",
          description:
            "It takes a village: the author discusses her latest novel\nThe post Ottessa Moshfegh on Lapvona first appeared on Harper's Magazine.",
          url: "https://harpers.org/2022/06/ottessa-moshfegh-on-lapvona/",
          urlToImage:
            "https://harpers.org/wp-content/uploads/2018/07/new-podcast-posts.jpg",
          publishedAt: "2022-06-17T13:11:56Z",
          content:
            "Ottessa Moshfegh (Eileen, My Year of Rest and Relaxation) discusses her latest novel, Lapvona. Born out of the seclusion of the pandemic, Lapvona is a work whose perspective-shifting, fable-like narr… [+367 chars]",
        },
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "ClearOne DIALOG® 10 USB Wins 2022 Sound & Video Contractor Magazine InfoComm Best in Market Award",
          description:
            "SALT LAKE CITY--(BUSINESS WIRE)--ClearOne DIALOG® 10 USB Wins 2022 Sound & Video Contractor Magazine InfoComm Best in Market Award",
          url: "https://www.businesswire.com/news/home/20220617005094/en/ClearOne-DIALOG%C2%AE-10-USB-Wins-2022-Sound-Video-Contractor-Magazine-InfoComm-Best-in-Market-Award",
          urlToImage:
            "https://mms.businesswire.com/media/20220617005094/en/1489854/23/ClearOne_InfoComm_22_Best_in_Market.jpg",
          publishedAt: "2022-06-17T13:10:49Z",
          content:
            "SALT LAKE CITY--(BUSINESS WIRE)--ClearOne (NASDAQ: CLRO) today announced that its DIALOG® 10 USB the first and only pro quality single-channel wireless USB microphone system available to integrators … [+2723 chars]",
        },
        {
          source: { id: null, name: "The Times of Israel" },
          author: null,
          title:
            "Major German art show to open despite accusations of support for BDS",
          description:
            "15th 'Documenta' being curated by Indonesian collective accused of supporting Israel-boycott movement, despite German law barring use of federal funds for those with BDS ties",
          url: "https://www.timesofisrael.com/major-german-art-show-to-open-despite-accusations-of-support-for-bds/",
          urlToImage:
            "https://static.timesofisrael.com/www/uploads/2022/06/AP22166537991304-1024x640.jpg",
          publishedAt: "2022-06-17T13:08:44Z",
          content:
            "KASSEL, Germany (AFP ) — Break-ins and vandalism, accusations of racism and antisemitism and a giant compost heap: Documenta, one of the world’s biggest art fairs, opens this week under a cloud of co… [+4368 chars]",
        },
        {
          source: { id: null, name: "Daily Beast" },
          author: "The Daily Beast",
          title:
            "Oh God. There’s Going to Be Another Blac Chyna-Kardashian Trial.",
          description:
            "Aaron Davidson/Getty\r\nBlac Chyna and Rob Kardashian, who wrapped up a defamation trial last month, are headed back to court again—this time over “revenge porn.” People reports that after a judge’s ruling this week, the exes will go to trial in Los Angeles on …",
          url: "https://www.thedailybeast.com/theres-going-to-be-another-blac-chyna-kardashian-trial",
          urlToImage:
            "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1674,w_2976,x_0,y_26/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1655469705/GettyImages-1397272995_pezkdp",
          publishedAt: "2022-06-17T13:07:04Z",
          content:
            "Blac Chyna and Rob Kardashian, who wrapped up a defamation trial last month, are headed back to court againthis time over revenge porn. People reports that after a judges ruling this week, the exes w… [+624 chars]",
        },
        {
          source: { id: null, name: "Foodpolitics.com" },
          author: "Marion",
          title: "Weekend reading: Jack Welch and profits-first ideology",
          description:
            "David Gelles.  The Man Who Broke Capitalism: How Jack Welch Gutted the Heartland and Crushed the Soul of Corporate America—and How to Undo His Legacy. Simon & Schuster, 2022 (264 pages). One good thing about being stuck in Covid quarantine (mild case: 3 days …",
          url: "https://www.foodpolitics.com/2022/06/weekend-reading-jack-welch-and-profits-first-ideology/",
          urlToImage:
            "https://www.foodpolitics.com/wp-content/uploads/Screenshot-2022-06-16-150254.png",
          publishedAt: "2022-06-17T13:00:37Z",
          content:
            "David Gelles.  The Man Who Broke Capitalism: How Jack Welch Gutted the Heartland and Crushed the Soul of Corporate Americaand How to Undo His Legacy. Simon &amp; Schuster, 2022 (264 pages).\r\nOne good… [+3096 chars]",
        },
        {
          source: { id: null, name: "Los Angeles Times" },
          author: "Hillary Kelly",
          title:
            "Review: The putrid waste of Ottessa Moshfegh's new novel, 'Lapvona'",
          description:
            'As with her novels "Eileen" and "My Year of Rest and Relaxation," Ottessa Moshfegh\'s "Lapvona" wallows in the mire of life. Here, it\'s thin gruel.',
          url: "https://www.latimes.com/entertainment-arts/books/story/2022-06-17/review-the-putrid-waste-of-ottessa-moshfeghs-new-novel-lapvona",
          urlToImage:
            "https://ca-times.brightspotcdn.com/dims4/default/53e252a/2147483647/strip/true/crop/3614x1897+0+851/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fef%2F12%2F674ca7bc4bb4836201ab0a3c4260%2Fla-photos-1staff-540977-ca-bk-ottessa-moshfegh-death-in-her-hands-jja-08.JPG",
          publishedAt: "2022-06-17T13:00:32Z",
          content:
            "In Melissa Broders The Pisces, its pink and slimy. Ling Mas Severance has an ugly sea cucumber. In Ottessa Moshfeghs Lapvona, the designated putrid penis is described as greasy, and though I know she… [+6192 chars]",
        },
        {
          source: { id: null, name: "Digital Trends" },
          author: "Giovanni Colantonio",
          title:
            "Thirsty Suitors turns awkward flirting into stylish RPG battles",
          description:
            "I played Thirsty Suitors at Tribeca Fest and I'm already smitten by its flirty RPG battles and skateboarding minigames.",
          url: "https://www.digitaltrends.com/gaming/thirsty-suitors-hands-on-preview/",
          urlToImage:
            "https://www.digitaltrends.com/wp-content/uploads/2022/06/thirsty-suitors-sergio-jala.jpg?p=1",
          publishedAt: "2022-06-17T13:00:12Z",
          content:
            "Whats more awkward than returning to your hometown? Returning to your hometown and getting hit on by everyone you grew up with.\r\nThirsty Suitors takes that mortifying experience and turns it into a c… [+3341 chars]",
        },
        {
          source: { id: null, name: "Cult of Mac" },
          author: "Scout Tafoya",
          title:
            "Cha Cha Real Smooth might be the worst movie of the year [Apple TV+ review] ☆☆☆☆☆",
          description:
            "Only moments ago Cooper Raiff was a niche figure, someone you could avoid with a little effort. But now, he is the filmgoing public’s problem, thanks to Cha Cha Real Smooth, which premieres Friday on Apple TV+. Writer/director/actor Raiff’s excruciating 2020 …",
          url: "https://www.cultofmac.com/779745/cha-cha-real-smooth-review-apple-tv-movie/",
          urlToImage:
            "https://www.cultofmac.com/wp-content/uploads/2022/06/Cha_Cha_Real_Smooth_Photo_0104.jpg.photo_thumbnail_show_home_large_2x.jpg",
          publishedAt: "2022-06-17T13:00:09Z",
          content:
            "Only moments ago Cooper Raiff was a niche figure, someone you could avoid with a little effort. But now, he is the filmgoing publics problem, thanks to Cha Cha Real Smooth, which premieres Friday on … [+7853 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "Wearable Medical Device Market to Hit USD 132.5 billion by 2031| AI and 5G to Bolster Growth Potentials, Growth Plus Reports",
          description:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- The global wearable medical device market size stood at USD 18 billion in 2020. The market is expected to clock US$ ~132.5 billion by 2031 owing to increasing FDA-approved product launches, increasing adoption of AI and…",
          url: "https://www.prnewswire.com/news-releases/wearable-medical-device-market-to-hit-usd-132-5-billion-by-2031-ai-and-5g-to-bolster-growth-potentials-growth-plus-reports-301570286.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1671244/Growth_Plus_Reports_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- The global wearable medical device market size stood at USD 18 billion in 2020. The market is expected to clock US$ ~132.5 billion by 2031 owing to increasing … [+6918 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "PR Newswire",
          title:
            "Wearable Medical Device Market to Hit USD 132.5 billion by 2031| AI and 5G to Bolster Growth Potentials, Growth Plus Reports",
          description:
            "The global wearable medical device market size stood at USD 18 billion in 2020. The market is expected to clock US$ ~132.5 billion by 2031 owing to...",
          url: "https://finance.yahoo.com/news/wearable-medical-device-market-hit-130000275.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/A7CVxuYgPXKQx7agbg1aLw--~B/aD0xMTM7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/1df1328f45022a1139e8d3de79adebc4",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- The global wearable medical device market size stood at USD 18 billion in 2020. The market is expected to clock US$ ~132.5 billion by 2031 owing to increasing … [+7155 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "HEROMAKER STUDIOS' KUMITE NFT COLLECTION LAUNCHES A GLOBAL FIRST IN COMMUNITY STORYTELLING",
          description:
            'Folder of Assets LOS ANGELES, June 17, 2022 /PRNewswire/ -- HeroMaker Studios will launch its genesis NFT collection called Kumite on Friday, June 17, 2022. The Vision "Kumite will define storytelling in web3," said Gareb Shamus, co-founder and CEO of HeroMak…',
          url: "https://www.prnewswire.com/news-releases/heromaker-studios-kumite-nft-collection-launches-a-global-first-in-community-storytelling-301570112.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1710482/HeroMaker_Studios_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            'Folder of Assets\r\nLOS ANGELES, June 17, 2022 /PRNewswire/ -- HeroMaker Studios will launch its genesis NFT collection called Kumite on Friday, June 17, 2022.\r\nThe Vision"Kumite will define storytelli… [+3326 chars]',
        },
      ],
    };
    MAGAZINE__1(data.articles);
    MAGAZINE__2_min_2(data.articles);
    MAGAZINE__2(data.articles);
    MAGAZINE__3(data.articles);
  }
  
  getData8();
  
  function getData9() {
    let data = {
      status: "ok",
      totalResults: 1120,
      articles: [
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "Pfizer-BioNTech COVID-19 Vaccine Receives FDA Emergency Use Authorization for Children 6 Months through 4 Years of Age",
          description:
            "NEW YORK & MAINZ, Germany--(BUSINESS WIRE)--Pfizer Inc. (NYSE: PFE) and BioNTech SE (Nasdaq: BNTX) today announced the U.S. Food and Drug Administration (FDA) granted emergency use authorization (EUA) of the Pfizer-BioNTech COVID-19 Vaccine as a three 3-µg do…",
          url: "https://www.businesswire.com/news/home/20220616005633/en/Pfizer-BioNTech-COVID-19-Vaccine-Receives-FDA-Emergency-Use-Authorization-for-Children-6-Months-through-4-Years-of-Age",
          urlToImage:
            "https://mms.businesswire.com/media/20220616005633/en/1045874/23/Pfizer_Logo_Color_RGB_APPROVED.jpg",
          publishedAt: "2022-06-17T13:36:06Z",
          content:
            "NEW YORK &amp; MAINZ, Germany--(BUSINESS WIRE)--Pfizer Inc. (NYSE: PFE) and BioNTech SE (Nasdaq: BNTX) today announced the U.S. Food and Drug Administration (FDA) granted emergency use authorization … [+30341 chars]",
        },
        {
          source: { id: null, name: "Freerepublic.com" },
          author: null,
          title: "Things NASA climate scientists say:",
          description:
            "https://wattsupwiththat.com/2022/06/16/things-nasa-climate-scientists-say/",
          url: "https://freerepublic.com/focus/f-news/4071777/posts",
          urlToImage: null,
          publishedAt: "2022-06-17T13:35:46Z",
          content:
            "Skip to comments.\r\nThings NASA climate scientists say:https://wattsupwiththat.com/2022/06/16/things-nasa-climate-scientists-say/ ^\r\n | June 16, 2022\r\n | Charles Rotter\r\nPosted on 06/17/2022 6:35:46 A… [+1612 chars]",
        },
        {
          source: { id: null, name: "Daily Mail" },
          author: "Charlie Lankston",
          title:
            "Amber Heard challenges Johnny Depp to do his own TV interview 'if he has a problem' with hers",
          description:
            "The 36-year-old actress issued a bold ultimatum to her ex-husband via a spokesperson on Friday, hours before her explosive sit-down with Savannah Guthrie is due to air in full on Dateline.",
          url: "https://www.dailymail.co.uk/femail/article-10927405/Amber-Heard-challenges-Johnny-Depp-TV-interview-problem-hers.html",
          urlToImage:
            "https://i.dailymail.co.uk/1s/2022/06/16/22/59165821-0-image-a-28_1655414610237.jpg",
          publishedAt: "2022-06-17T13:35:20Z",
          content:
            "Amber Heard has challenged her ex-husband Johnny Depp to do his own TV interview 'if he has a problem' with her repeating her defamatory allegations that he beat her during an explosive sit-down with… [+34157 chars]",
        },
        {
          source: { id: null, name: "Variety" },
          author: "Leo Barraclough",
          title: "German TV Series ‘Sisi’ Returns to Lithuania",
          description:
            "The second season of the German TV series “Sisi,” which follows the life of Empress Elisabeth of Austria (also known as Sisi), is currently shooting in Lithuania, Film New Europe reports. The series is produced by Story House Pictures GmbH for RTL+ and servic…",
          url: "https://variety.com/2022/tv/global/sisi-lithuania-1235297252/",
          urlToImage:
            "https://variety.com/wp-content/uploads/2022/06/Dominique-Devenport-Sisi-photos-from-film-PR-service.jpg?w=1000",
          publishedAt: "2022-06-17T13:35:01Z",
          content:
            "The second season of the German TV series “Sisi,” which follows the life of Empress Elisabeth of Austria (also known as Sisi), is currently shooting in Lithuania, Film New Europe reports.\r\nThe series… [+2146 chars]",
        },
        {
          source: { id: null, name: "Rogerebert.com" },
          author: "Brian Tallerico",
          title: "Jerry & Marge Go Large",
          description:
            "Writer Brad Copeland and director David Frankel simply don’t trust Jerry and Marge.",
          url: "https://www.rogerebert.com/reviews/jerry-and-marge-go-large-movie-review-2022",
          urlToImage:
            "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/jerry-and-marge-go-large-movie-review-2022/homepage_jerry-and-marge-go-large-movie-review-2022.jpg",
          publishedAt: "2022-06-17T13:34:45Z",
          content:
            "“Jerry & Marge Go Large” starts as a breezy character study about a couple who basically fall into an unexpected news story late in life. Loosely based on a true story, it’s tells of a married pair w… [+3391 chars]",
        },
        {
          source: { id: null, name: "The Times of Israel" },
          author: null,
          title:
            "Iran’s president slams US for imposing new sanctions, says they undermine talks",
          description:
            "'The world must give us the right not to trust the United States because they are violating their agreements,' Raisi says; UAE calls on Iran to prove nuclear program is peaceful",
          url: "https://www.timesofisrael.com/irans-president-slams-us-for-imposing-new-sanctions-says-they-undermine-talks/",
          urlToImage:
            "https://static.timesofisrael.com/www/uploads/2022/06/AP22162343775737-2-1024x640.jpg",
          publishedAt: "2022-06-17T13:34:00Z",
          content:
            "TEHRAN, Iran Iran’s President Ebrahim Raisi on Friday criticized the United States for imposing new sanctions on petrochemical producers in the Islamic Republic, amid a deadlock in talks aimed at rev… [+2971 chars]",
        },
        {
          source: { id: null, name: "Current.org" },
          author: "Current",
          title: "Is It Time For NPR’s “All Things Considered” To Be Rethought?",
          description:
            "“Its format and clock have remained basically the same for a generation. Meanwhile, there’s been considerable swirl and change in media consumption and audio competition. … Ironically, part of the answer may lie in letting All Things Considered be free from t…",
          url: "http://current.org/2022/06/why-its-time-to-reconsider-how-all-things-considered-can-expand-its-service-for-todays-listeners/",
          urlToImage:
            "https://i0.wp.com/current.org/wp-content/uploads/2022/06/iStock-1138420319-e1655303018668.jpeg?fit=1170%2C658&ssl=1",
          publishedAt: "2022-06-17T13:31:00Z",
          content:
            "I love All Things Considered. It always has been, and remains, my favorite public radio program. \r\nAll Things Considered was the first public radio program I ever heard driving around in the back sea… [+20408 chars]",
        },
        {
          source: { id: null, name: "tomandlorenzo.com" },
          author: "Lorenzo Marquez",
          title: "T LOunge for June 17th, 2022",
          description:
            "Rinela Bar and Restaurant – Crete, Greece   You can hear these pictures, can’t you? We won’t ruin the effect with our words. It’s FRIDAY, you made it, now grab a seat.   ‘Blonde’ Trailer: Ana de Armas Stuns as Marilyn Monroe in Netflix’s NC-17 Drama Netflix h…",
          url: "https://tomandlorenzo.com/2022/06/t-lounge-for-june-17th-2022/",
          urlToImage:
            "https://tomandlorenzo.com/wp-content/uploads/2022/06/Bars-Restaurants-Cafes-Lounges-Clubs-6-17-2022-Tom-Lorenzo-Site-1.jpg",
          publishedAt: "2022-06-17T13:30:58Z",
          content:
            "Rinela Bar and Restaurant – Crete, Greece\r\nYou can hear these pictures, can’t you? We won’t ruin the effect with our words. It’s FRIDAY, you made it, now grab a seat.\r\nBlonde Trailer: Ana de Armas St… [+16946 chars]",
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "Lifestyle Desk",
          title:
            "Guinness alert: UK man lifts heaviest deadlift with one finger, breaks 10-year record",
          description:
            "Using solely his middle finger, the Kent-based martial artist deadlifted the incredible weight of 129.50 kg (285.49 lb) for eight seconds, read Guinness World Records site",
          url: "https://indianexpress.com/article/lifestyle/life-style/guinness-alert-uk-man-breaks-heaviest-deadlift-with-one-finger-7972856/",
          urlToImage:
            "https://images.indianexpress.com/2022/06/guinness-deadlift_guinness.jpg",
          publishedAt: "2022-06-17T13:30:49Z",
          content:
            "A UK man has done the unbelievable. In an attempt to break a record untouched for over 10-years — of the heaviest deadlift with one finger — Steve Keeler deadlifted an incredible weight of 129.50 kg … [+1181 chars]",
        },
        {
          source: { id: null, name: "The Points Guy" },
          author: "Ryan Smith",
          title:
            "Quick Points: 500 bonus points when staying at new Hyatt hotels",
          description:
            "Everyone has their favorite type of points and miles. My favorite type? Free points I can earn with no extra effort. In this guide, I want to walk you through an ongoing promotion with World of Hyatt where you can earn 500 bonus points for simply staying at i…",
          url: "http://thepointsguy.com/guide/bonus-points-new-hyatts/",
          urlToImage:
            "https://thepointsguy.global.ssl.fastly.net/us/originals/2021/08/20210816_Hyatt-Regency-JFK-Suite_BStawski-50.jpg",
          publishedAt: "2022-06-17T13:30:07Z",
          content:
            "Everyone has their favorite type of points and miles. My favorite type? Free points I can earn with no extra effort.\r\nIn this guide, I want to walk you through an ongoing promotion with World of Hyat… [+5448 chars]",
        },
        {
          source: { id: null, name: "Tech Xplore" },
          author: "Ingrid Fadelli",
          title: "A technique to teach bimanual robots stir-fry cooking",
          description:
            "As robots make their way into a variety of real-world environments, roboticists are trying to ensure that they can efficiently complete a growing number of tasks. For robots that are designed to assist humans in their homes, this includes household chores, su…",
          url: "https://techxplore.com/news/2022-06-technique-bimanual-robots-stir-fry-cooking.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/hires/2022/a-technique-to-teach-b.jpg",
          publishedAt: "2022-06-17T13:30:01Z",
          content:
            "As robots make their way into a variety of real-world environments, roboticists are trying to ensure that they can efficiently complete a growing number of tasks. For robots that are designed to assi… [+4814 chars]",
        },
        {
          source: { id: null, name: "Business Standard" },
          author: "Press Trust of India",
          title:
            "North East Frontier Railway cancels trains after Bihar's Agnipath protests",
          description:
            "North East Frontier Railway (NFR) on Friday cancelled some trains due to violent protests in Bihar against Agnipath army recruitment scheme, and floods in Assam",
          url: "https://www.business-standard.com/article/current-affairs/north-east-frontier-railway-cancels-trains-after-bihar-s-agnipath-protests-122061700846_1.html",
          urlToImage:
            "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/17/full/1655464001-6473.jpg",
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "North East Frontier Railway (NFR) on Friday cancelled some trains due to violent protests in Bihar against Agnipath army recruitment scheme, and floods in Assam.\r\nSix coaches of train number 15652 Gu… [+3231 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "At 13.9% CAGR, Global Real World Evident Solutions Market Size & Share to Hit USD 2.57 Billion by 2028 | RWE Solutions Industry Trends, Growth, Value, Statistics, Analysis & Forecast Report by Zion Market Research",
          description:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- As per Zion Market Research study, The global real-world evidence solutions market reached the value of USD 1.29 billion in 2021 and is estimated to expand at a CAGR of 13.9 percent during the forecast period. The marke…",
          url: "https://www.prnewswire.com/news-releases/at-13-9-cagr-global-real-world-evident-solutions-market-size--share-to-hit-usd-2-57-billion-by-2028--rwe-solutions-industry-trends-growth-value-statistics-analysis--forecast-report-by-zion-market-research-301570308.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1605489/Zion_Market_Research_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- As per Zion Market Research study, The global real-world evidence solutions market reached the value of USD 1.29 billion in 2021 and is estimated to expand at … [+14582 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "Major eBetting Companies Working Hard to Simplify Operations for a More Pleasurable Experience",
          description:
            "FinancialNewsMedia.com News Commentary PALM BEACH, Fla., June 17, 2022 /PRNewswire/ -- The global sports betting markets, unlike most, grew during the pandemic and are projected to continue to grow for years to come. The demand for sports betting is driven by…",
          url: "https://www.prnewswire.com/news-releases/major-ebetting-companies-working-hard-to-simplify-operations-for-a-more-pleasurable-experience-301570184.html",
          urlToImage: null,
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "FinancialNewsMedia.com\r\n News Commentary\r\nPALM BEACH, Fla., June 17, 2022 /PRNewswire/ -- The global sports betting markets, unlike most, grew during the pandemic and are projected to continue to gro… [+10731 chars]",
        },
        {
          source: { id: null, name: "MarketWatch" },
          author: "Tomi Kilgore",
          title: "Vince McMahon to appear live on WWE's SmackDown",
          description:
            'Shares of World Wrestling Entertainment Inc. slumped 2.6% in premarket trading Friday, after the media and entertainment company said Vince McMahon will appear live on its "SmackDown" TV event. The show will air Friday at 8 p.m. Eastern on FOX. Earlier, WWE d…',
          url: "https://www.marketwatch.com/story/vince-mcmahon-to-appear-live-on-wwes-smackdown-2022-06-17",
          urlToImage:
            "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
          publishedAt: "2022-06-17T13:29:39Z",
          content:
            'Shares of World Wrestling Entertainment Inc. \r\n WWE,\r\n -1.40%\r\nslumped 2.6% in premarket trading Friday, after the media and entertainment company said Vince McMahon will appear live on its "SmackDow… [+536 chars]',
        },
        {
          source: { id: "breitbart-news", name: "Breitbart News" },
          author: "Charlie Spiering, Charlie Spiering",
          title:
            "Climate Forum: Joe Biden Calls for 'Transition' to 'Zero Emissions' Cars to Combat High Gas Prices",
          description:
            'President Joe Biden on Friday hosted a climate change forum at the White House, calling for a "transition" to electric vehicles to help reduce America\'s dependence on oil.',
          url: "https://www.breitbart.com/politics/2022/06/17/climate-forum-joe-biden-calls-for-transition-to-zero-emissions-cars-to-combat-high-gas-prices/",
          urlToImage:
            "https://media.breitbart.com/media/2021/11/GettyImages-1236627157-640x335.jpg",
          publishedAt: "2022-06-17T13:29:33Z",
          content:
            "President Joe Biden on Friday hosted a climate change forum at the White House, calling for a “transition” to electric vehicles to help reduce America’s dependence on oil.\r\n“Russia’s war is driving u… [+1822 chars]",
        },
        {
          source: { id: null, name: "Phys.Org" },
          author: "Emanuela Barbiroglio",
          title: "Stretching sands as desertification spreads to Europe",
          description:
            "Drought and desertification threatens to degrade land in Europe and around the world.",
          url: "https://phys.org/news/2022-06-sands-desertification-europe.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/2022/stretching-sands-as-de.jpg",
          publishedAt: "2022-06-17T13:28:22Z",
          content:
            "Drought and desertification threatens to degrade land in Europe and around the world.\r\nThe scale of the issue is sometimes under-appreciated, but drylands cover over 41% of the Earth's terrestrial la… [+6744 chars]",
        },
        {
          source: { id: null, name: "LatestLY" },
          author: "Team Latestly",
          title:
            "PM @narendramodi to Launch Historic Torch Relay for 44th Chess Olympiad on 19th ... - Latest Tweet by PIB - LatestLY",
          description:
            "The latest Tweet by PIB India states, 'PM @narendramodi to launch historic torch relay for 44th Chess Olympiad on 19th June India to host Chess Olympiad for the first time Read here: ...'",
          url: "https://www.latestly.com/socially/india/news/pm-narendramodi-to-launch-historic-torch-relay-for-44th-chess-olympiad-on-19th-latest-tweet-by-pib-india-3839375.html",
          urlToImage:
            "https://st1.latestly.com/wp-content/uploads/2021/06/TW-4-PIB-India-784x441.png",
          publishedAt: "2022-06-17T13:28:15Z",
          content:
            "PM @narendramodi to launch historic torch relay for 44th Chess Olympiad on 19th June\r\nIndia to host Chess Olympiad for the first time\r\nRead here: https://t.co/yQYwKvAslL— PIB India (@PIB_India) June … [+518 chars]",
        },
        {
          source: { id: null, name: "Wonkette.com" },
          author: "Liz Dye",
          title: "The Top 10 WTF Moments From Day 3 Of The January 6 Hearings",
          description:
            "Usually, congressional hearings are hours-long excuses for legislators to grandstand for their constituents or score cheap points. In contrast, the House January 6 Select Committee hearings have been extremely well-executed, with effective questioners, witnes…",
          url: "https://www.wonkette.com/the-top-ten-wtf-moments-from-day-3-of-the-january-6-hearings",
          urlToImage:
            "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTk4OTQ4OS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTY2NDE5NjkwNX0.rZXtoe9xU-dVpUKDacZ7uSZV2OkS59sBre5HdvcFJDY/img.png?width=1200&coordinates=0%2C77%2C0%2C78&height=600",
          publishedAt: "2022-06-17T13:28:05Z",
          content:
            "Usually, congressional hearings are hours-long excuses for legislators to grandstand for their constituents or score cheap points. In contrast, the House January 6 Select Committee hearings have been… [+10983 chars]",
        },
        {
          source: { id: null, name: "Jewishnews.co.uk" },
          author: null,
          title: "OPINION: New UAE-Israel trade deal can last the sands of time",
          description:
            "Jon Medved, OurCrowd CEO and Dr. Sabah al Binali, OurCrowd Arabia executive chairman, set the scene on a prosperous new era of free trade relations between the UAE and Israel.",
          url: "https://www.jewishnews.co.uk/opinion-new-uae-israel-trade-deal-can-last-the-sands-of-time/",
          urlToImage:
            "https://static.jewishnews.co.uk/jewishnews/uploads/2020/09/200831-JINIPIX-6000-1-1024x640.jpg",
          publishedAt: "2022-06-17T13:27:51Z",
          content:
            "The Sand Curtain between Israel and the United Arab Emirates (UAE) has come down and there is no better proof than the free trade agreement the two nations signed last week, the first of its kind bet… [+3775 chars]",
        },
      ],
    };
  
    WORLD_NEWS_1(data.articles);
    WORLD_NEWS_2(data.articles);
    WORLD_NEWS_3(data.articles);
    WORLD_NEWS_4(data.articles);
  }
  
  getData9();
  
  function getData10() {
    let data = {
      status: "ok",
      totalResults: 311,
      articles: [
        {
          source: { id: null, name: "Business Wire" },
          author: null,
          title:
            "Pfizer-BioNTech COVID-19 Vaccine Receives FDA Emergency Use Authorization for Children 6 Months through 4 Years of Age",
          description:
            "NEW YORK & MAINZ, Germany--(BUSINESS WIRE)--Pfizer Inc. (NYSE: PFE) and BioNTech SE (Nasdaq: BNTX) today announced the U.S. Food and Drug Administration (FDA) granted emergency use authorization (EUA) of the Pfizer-BioNTech COVID-19 Vaccine as a three 3-µg do…",
          url: "https://www.businesswire.com/news/home/20220616005633/en/Pfizer-BioNTech-COVID-19-Vaccine-Receives-FDA-Emergency-Use-Authorization-for-Children-6-Months-through-4-Years-of-Age",
          urlToImage:
            "https://mms.businesswire.com/media/20220616005633/en/1045874/23/Pfizer_Logo_Color_RGB_APPROVED.jpg",
          publishedAt: "2022-06-17T13:36:06Z",
          content:
            "NEW YORK &amp; MAINZ, Germany--(BUSINESS WIRE)--Pfizer Inc. (NYSE: PFE) and BioNTech SE (Nasdaq: BNTX) today announced the U.S. Food and Drug Administration (FDA) granted emergency use authorization … [+30341 chars]",
        },
        {
          source: { id: null, name: "Daily Mail" },
          author: "Charlie Lankston",
          title:
            "Amber Heard challenges Johnny Depp to do his own TV interview 'if he has a problem' with hers",
          description:
            "The 36-year-old actress issued a bold ultimatum to her ex-husband via a spokesperson on Friday, hours before her explosive sit-down with Savannah Guthrie is due to air in full on Dateline.",
          url: "https://www.dailymail.co.uk/femail/article-10927405/Amber-Heard-challenges-Johnny-Depp-TV-interview-problem-hers.html",
          urlToImage:
            "https://i.dailymail.co.uk/1s/2022/06/16/22/59165821-0-image-a-28_1655414610237.jpg",
          publishedAt: "2022-06-17T13:35:20Z",
          content:
            "Amber Heard has challenged her ex-husband Johnny Depp to do his own TV interview 'if he has a problem' with her repeating her defamatory allegations that he beat her during an explosive sit-down with… [+34157 chars]",
        },
        {
          source: { id: null, name: "TheJournal.ie" },
          author: "AFP",
          title:
            "US approves two Covid vaccines for children as young as six months",
          description:
            "The Centers for Disease Control and Prevention (CDC) must now also recommend the vaccines before they are put into use in the US.",
          url: "https://www.thejournal.ie/covid-19-vaccines-children-babies-5793349-Jun2022/",
          urlToImage:
            "https://img2.thejournal.ie/article/5793349/river/?height=400&version=5793353",
          publishedAt: "2022-06-17T13:33:52Z",
          content:
            "THE US FOOD and Drug Administration has granted emergency authorisation for the use of Pfizer and Moderna Covid-19 vaccines in children as young as six months, the final age group awaiting immunisati… [+2561 chars]",
        },
        {
          source: { id: null, name: "Maclean's" },
          author: "Dave Zarum",
          title:
            "I’m on a waitlist with nearly 100,000 Nova Scotians who need a doctor",
          description:
            "More than one in ten people from the province are without a doctor. “Watching my prescription run out feels like watching a time bomb ticking down,” says Evelyn Hornbeck\nThe post I’m on a waitlist with nearly 100,000 Nova Scotians who need a doctor appeared f…",
          url: "https://www.macleans.ca/society/health/im-on-a-waitlist-with-nearly-100000-nova-scotians-who-need-a-doctor/",
          urlToImage:
            "https://www.macleans.ca/wp-content/uploads/2022/06/IMG_4641-766x431.jpg",
          publishedAt: "2022-06-17T13:33:19Z",
          content:
            "More than one in ten people from the province are without a doctor. Watching my prescription run out feels like watching a time bomb ticking down, says Evelyn HornbeckIn the past five years, Canadas … [+4102 chars]",
        },
        {
          source: { id: null, name: "Current.org" },
          author: "Current",
          title: "Is It Time For NPR’s “All Things Considered” To Be Rethought?",
          description:
            "“Its format and clock have remained basically the same for a generation. Meanwhile, there’s been considerable swirl and change in media consumption and audio competition. … Ironically, part of the answer may lie in letting All Things Considered be free from t…",
          url: "http://current.org/2022/06/why-its-time-to-reconsider-how-all-things-considered-can-expand-its-service-for-todays-listeners/",
          urlToImage:
            "https://i0.wp.com/current.org/wp-content/uploads/2022/06/iStock-1138420319-e1655303018668.jpeg?fit=1170%2C658&ssl=1",
          publishedAt: "2022-06-17T13:31:00Z",
          content:
            "I love All Things Considered. It always has been, and remains, my favorite public radio program. \r\nAll Things Considered was the first public radio program I ever heard driving around in the back sea… [+20408 chars]",
        },
        {
          source: { id: null, name: "The Points Guy" },
          author: "Ryan Smith",
          title:
            "Quick Points: 500 bonus points when staying at new Hyatt hotels",
          description:
            "Everyone has their favorite type of points and miles. My favorite type? Free points I can earn with no extra effort. In this guide, I want to walk you through an ongoing promotion with World of Hyatt where you can earn 500 bonus points for simply staying at i…",
          url: "http://thepointsguy.com/guide/bonus-points-new-hyatts/",
          urlToImage:
            "https://thepointsguy.global.ssl.fastly.net/us/originals/2021/08/20210816_Hyatt-Regency-JFK-Suite_BStawski-50.jpg",
          publishedAt: "2022-06-17T13:30:07Z",
          content:
            "Everyone has their favorite type of points and miles. My favorite type? Free points I can earn with no extra effort.\r\nIn this guide, I want to walk you through an ongoing promotion with World of Hyat… [+5448 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "At 13.9% CAGR, Global Real World Evident Solutions Market Size & Share to Hit USD 2.57 Billion by 2028 | RWE Solutions Industry Trends, Growth, Value, Statistics, Analysis & Forecast Report by Zion Market Research",
          description:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- As per Zion Market Research study, The global real-world evidence solutions market reached the value of USD 1.29 billion in 2021 and is estimated to expand at a CAGR of 13.9 percent during the forecast period. The marke…",
          url: "https://www.prnewswire.com/news-releases/at-13-9-cagr-global-real-world-evident-solutions-market-size--share-to-hit-usd-2-57-billion-by-2028--rwe-solutions-industry-trends-growth-value-statistics-analysis--forecast-report-by-zion-market-research-301570308.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1605489/Zion_Market_Research_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- As per Zion Market Research study, The global real-world evidence solutions market reached the value of USD 1.29 billion in 2021 and is estimated to expand at … [+14582 chars]",
        },
        {
          source: { id: null, name: "Rogerebert.com" },
          author: "Simon Abrams",
          title: "The Witch 2: The Other One",
          description:
            "I’m not sure where this particular wannabe franchise is going or if anybody but initiated viewers will care to find out, but I could watch another one.",
          url: "https://www.rogerebert.com/reviews/the-witch-2-the-other-one-movie-review-2022",
          urlToImage:
            "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-witch-2-the-other-one-movie-review-2022/homepage_the-witch-2-the-other-one-movie-review-2022.jpeg",
          publishedAt: "2022-06-17T13:29:17Z",
          content:
            "You don’t need to watch the bloody/angsty Korean superhero/horror hybrid “The Witch: Part 1. The Subversion” if you’re only curious about its sequel, “The Witch: Part 2. The Other One.” Both “The Wit… [+4719 chars]",
        },
        {
          source: { id: null, name: "Phys.Org" },
          author: "Emanuela Barbiroglio",
          title: "Stretching sands as desertification spreads to Europe",
          description:
            "Drought and desertification threatens to degrade land in Europe and around the world.",
          url: "https://phys.org/news/2022-06-sands-desertification-europe.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/2022/stretching-sands-as-de.jpg",
          publishedAt: "2022-06-17T13:28:22Z",
          content:
            "Drought and desertification threatens to degrade land in Europe and around the world.\r\nThe scale of the issue is sometimes under-appreciated, but drylands cover over 41% of the Earth's terrestrial la… [+6744 chars]",
        },
        {
          source: { id: null, name: "PR Daily" },
          author: "Allison Carter",
          title:
            "Ragan celebrates its Top Women in Communications honorees for 2022 in NYC",
          description:
            "Hundreds gathered at the Edison Ballroom in New York City Thursday to celebrate the achievements of a class of extraordinary women. The honorees for Ragan and PR Daily’s Top Women in Communications Awards for 2022 include young pros making a name for themselv…",
          url: "https://www.prdaily.com/ragan-celebrates-its-top-women-in-communications-honorees-for-2022-in-nyc/",
          urlToImage:
            "https://s39940.pcdn.co/wp-content/uploads/2022/06/champagne-1.jpeg",
          publishedAt: "2022-06-17T13:26:50Z",
          content:
            "Women toast at the 2022 Top Women in Communications Awards, sponsored by Ragan and PR Daily. Photo by Zandy Mangold.\r\nThe honorees for Ragan and PR Daily’s Top Women in Communications Awards for 2022… [+21021 chars]",
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Clare Duffy",
          title:
            "Elon Musk pressured Twitter to give him access to a 'firehose' of data to evaluate bots. Now what?",
          description:
            "Elon Musk spent weeks raising alarms that Twitter may have far more fake, spam and bot accounts than previously disclosed and threatening to abandon his $44 billion deal to buy the company if it didn't provide him with more information to evaluate the matter.",
          url: "https://www.cnn.com/2022/06/17/tech/elon-musk-twitter-bots/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/220615144004-04-elon-musk-file.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2022-06-17T13:19:08Z",
          content:
            "Elon Musk spent weeks raising alarms that Twitter may have far more fake, spam and bot accounts than previously disclosed and threatening to abandon his $44 billion deal to buy the company if it didn… [+7113 chars]",
        },
        {
          source: { id: "politico", name: "Politico" },
          author: "By Lara Korte, Jeremy B. White and Sakura Cannestra",
          title: "Could liability insurance prevent gun violence in California?",
          description: null,
          url: "https://www.politico.com/newsletters/california-playbook/2022/06/17/could-liability-insurance-prevent-gun-violence-in-california-00040327",
          urlToImage:
            "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
          publishedAt: "2022-06-17T13:16:44Z",
          content:
            "Presented by California Environmental Voters\r\nTHE BUZZ:California already requires gun owners to have a safety certificate, background check, and go through a waiting period before they can take thei… [+24943 chars]",
        },
        {
          source: { id: null, name: "Phys.Org" },
          author: "Li Yuan",
          title: "Chinese fossils show human middle ear evolved from fish gills",
          description:
            "The human middle ear—which houses three tiny, vibrating bones—is key to transporting sound vibrations into the inner ear, where they become nerve impulses that allow us to hear.",
          url: "https://phys.org/news/2022-06-chinese-fossils-human-middle-ear.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/2022/chinese-fossils-show-h.jpg",
          publishedAt: "2022-06-17T13:07:19Z",
          content:
            "The human middle earwhich houses three tiny, vibrating bonesis key to transporting sound vibrations into the inner ear, where they become nerve impulses that allow us to hear.\r\nEmbryonic and fossil e… [+4050 chars]",
        },
        {
          source: { id: null, name: "Phys.Org" },
          author: "Thomas Mortlock",
          title:
            "Climate-fueled wave patterns pose an erosion risk for developing countries",
          description:
            "The world's coastlines are at the forefront of climate change. That's because they're constantly changing, and respond quickly to changes in climate. They're particularly important because around 70% of the world's population live within 100km of the coast, a…",
          url: "https://phys.org/news/2022-06-climate-fueled-patterns-pose-erosion-countries.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/2022/climate-fuelled-wave-p.jpg",
          publishedAt: "2022-06-17T13:07:04Z",
          content:
            "by Thomas Mortlock, Adrean Webb, Itxaso Odériz, Nobuhito Mori, Rodolfo Silva and Tomoya Shimura, The ConversationThe world's coastlines are at the forefront of climate change. That's because they're … [+5988 chars]",
        },
        {
          source: { id: null, name: "SB Nation" },
          author: "BucksRoyal",
          title: "Tom Holmes Signs New Three-Year Reading Contract",
          description:
            "The academy graduate agrees three more years at the club!",
          url: "https://thetilehurstend.sbnation.com/2022/6/17/23171548/tom-holmes-signs-new-three-year-reading-contract",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/is2IaUbDRavn1VPKe9Q5LiwL71U=/0x0:3629x1900/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23633667/1240001384.jpg",
          publishedAt: "2022-06-17T13:04:25Z",
          content:
            "Photo by Zac Goodwin/PA Images via Getty Images\r\n\n \n\n The academy graduate agrees three more years at the club! Reading finally have some good news on the contracts front! Tom Holmes has agreed a new… [+3139 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "Usman Kabir",
          title:
            "Hedge Funds Were Right About MicroStrategy Incorporated (MSTR) and 9 Other Tech Stocks",
          description:
            "In this article, we discuss MicroStrategy Incorporated (MSTR) and 9 other tech stocks that hedge funds were right about. If you want to read about some more ...",
          url: "https://finance.yahoo.com/news/hedge-funds-were-microstrategy-incorporated-130133834.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/n0oGEhHeJtXJ70zGhcfGyQ--~B/aD02MDA7dz00Mzk7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/221c002c01b235c48f6d5da62d660300",
          publishedAt: "2022-06-17T13:01:33Z",
          content:
            "In this article, we discuss MicroStrategy Incorporated (MSTR) and 9 other tech stocks that hedge funds were right about. If you want to read about some more tech stocks that hedge funds were right ab… [+12424 chars]",
        },
        {
          source: { id: "usa-today", name: "USA Today" },
          author:
            "Asbury Park Press, Alex Biese and Baylee DeMuth, Asbury Park Press",
          title:
            "'Love always wins': Gay fathers discuss joys and challenges of parenting in modern America",
          description:
            "There are 2 million to 3.7 million American children with an LGBTQ parent, and approximately 191,000 children being raised by same-sex parents.",
          url: "https://www.usatoday.com/story/life/health-wellness/2022/06/17/gay-dads-joys-challenges-parenting-america-fathers-day/7632405001/",
          urlToImage:
            "https://www.gannett-cdn.com/presto/2022/06/09/PAPP/5f8b87b7-1a16-4f52-8341-97a29f00a4e9-sh060822gaydads008.JPG?auto=webp&crop=5663,3186,x0,y0&format=pjpg&width=1200",
          publishedAt: "2022-06-17T13:00:44Z",
          content:
            "This year, Father’s Day will be particularly poignant for Rob Lyons and Carl Tanis.\r\nThe New Jersey couple have been together for 16 years, and married for nine. Sunday, June 19, marks their first Fa… [+8362 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "News Direct",
          title:
            "Aflac 2021 Business & Sustainability Report: Human Capital Management",
          description:
            "We believe in a comprehensive approach to wellness, which encompasses four dimensions: physical, emotional, social and financial.",
          url: "https://finance.yahoo.com/news/aflac-2021-business-sustainability-report-130010299.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/xNwdN7BlU6UlREmsL4bXaw--~B/aD0zMDY7dz02NTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/news_direct/4d2a5edfa0ea3e7c8df94ecee9883cfd",
          publishedAt: "2022-06-17T13:00:10Z",
          content:
            "We believe in a comprehensive approach to wellness, which encompasses four dimensions: physical, emotional, social and financial.\r\nNorthampton, MA --News Direct-- Aflac Incorporated\r\nAt Aflac, we kno… [+12959 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "PR Newswire",
          title:
            "Allergan Aesthetics publishes 'The Future of Aesthetics' global trends report providing unrivalled insight into future of industry",
          description:
            "Allergan Aesthetics, an AbbVie company, and a global leader in medical aesthetics treatments, today launched 'The Future of Aesthetics' global trends report ...",
          url: "https://finance.yahoo.com/news/allergan-aesthetics-publishes-future-aesthetics-130000803.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/CcBGr9P2GlqTiIa9nC.lxg--~B/aD05Nzt3PTQwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/prnewswire.com/4591e97f9fa119e687b86928935135e7",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "-- Report is aimed at helping practitioners and the industry understand and prepare for the future by supporting the evolving needs of patients --\r\n-- Built on robust market research and analysis of … [+7851 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "The Value Pendulum",
          title: "Is ZIM Integrated Shipping A Good Dividend Stock?",
          description:
            "ZIM's recent share price performance has been poor, as a result of concerns relating to lower freight rates going forward. See if ZIM is a good dividend stock.",
          url: "https://seekingalpha.com/article/4518914-is-zim-integrated-shipping-good-dividend-stock",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1295961044/image_1295961044.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Denys Yelmanov/iStock via Getty Images\r\nElevator Pitch\r\n I have a Buy rating for ZIM Integrated Shipping Services' (NYSE:ZIM) shares. ZIM is an appealing long-term investment candidate given its uniq… [+9730 chars]",
        },
      ],
    };
  
    photos(data.articles);
  }
  
  getData10();
  
  function getData11() {
    let data = {
      status: "ok",
      totalResults: 47,
      articles: [
        {
          source: { id: null, name: "Daily Mail" },
          author: "Charlie Lankston",
          title:
            "Amber Heard challenges Johnny Depp to do his own TV interview 'if he has a problem' with hers",
          description:
            "The 36-year-old actress issued a bold ultimatum to her ex-husband via a spokesperson on Friday, hours before her explosive sit-down with Savannah Guthrie is due to air in full on Dateline.",
          url: "https://www.dailymail.co.uk/femail/article-10927405/Amber-Heard-challenges-Johnny-Depp-TV-interview-problem-hers.html",
          urlToImage:
            "https://i.dailymail.co.uk/1s/2022/06/16/22/59165821-0-image-a-28_1655414610237.jpg",
          publishedAt: "2022-06-17T13:35:20Z",
          content:
            "Amber Heard has challenged her ex-husband Johnny Depp to do his own TV interview 'if he has a problem' with her repeating her defamatory allegations that he beat her during an explosive sit-down with… [+34157 chars]",
        },
        {
          source: { id: "politico", name: "Politico" },
          author: "By Lara Korte, Jeremy B. White and Sakura Cannestra",
          title: "Could liability insurance prevent gun violence in California?",
          description: null,
          url: "https://www.politico.com/newsletters/california-playbook/2022/06/17/could-liability-insurance-prevent-gun-violence-in-california-00040327",
          urlToImage:
            "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
          publishedAt: "2022-06-17T13:16:44Z",
          content:
            "Presented by California Environmental Voters\r\nTHE BUZZ:California already requires gun owners to have a safety certificate, background check, and go through a waiting period before they can take thei… [+24943 chars]",
        },
        {
          source: { id: null, name: "The Times of Israel" },
          author: null,
          title:
            "Major German art show to open despite accusations of support for BDS",
          description:
            "15th 'Documenta' being curated by Indonesian collective accused of supporting Israel-boycott movement, despite German law barring use of federal funds for those with BDS ties",
          url: "https://www.timesofisrael.com/major-german-art-show-to-open-despite-accusations-of-support-for-bds/",
          urlToImage:
            "https://static.timesofisrael.com/www/uploads/2022/06/AP22166537991304-1024x640.jpg",
          publishedAt: "2022-06-17T13:08:44Z",
          content:
            "KASSEL, Germany (AFP ) — Break-ins and vandalism, accusations of racism and antisemitism and a giant compost heap: Documenta, one of the world’s biggest art fairs, opens this week under a cloud of co… [+4368 chars]",
        },
        {
          source: { id: null, name: "Phys.Org" },
          author: "Science X staff",
          title: "Europe's hottest summers",
          description:
            "Sweltering temperatures in Spain and France spotlight the increasing frequency of heatwaves in Europe.",
          url: "https://phys.org/news/2022-06-europe-hottest-summers.html",
          urlToImage: "https://scx2.b-cdn.net/gfx/news/hires/2021/heatwave-1.jpg",
          publishedAt: "2022-06-17T13:04:43Z",
          content:
            "Sweltering temperatures in Spain and France spotlight the increasing frequency of heatwaves in Europe.\r\nIn just over two decades, the continent has experienced its five hottest summers since 1500.\r\n2… [+3492 chars]",
        },
        {
          source: { id: null, name: "Worldsoccertalk.com" },
          author: "Kyle Fansler",
          title: "How Darwin Núñez fits into an already-loaded Liverpool team",
          description:
            "Darwin Núñez enters a Liverpool squad that was one game away from completing an illustrious quadruple. In the end, the Reds won the two lesser trophies of that set, the FA Cup and the League Cup. It lost the Premier League on the final day and got shutout in …",
          url: "https://worldsoccertalk.com/2022/06/17/how-darwin-nunez-fits-into-an-already-loaded-liverpool-team/",
          urlToImage:
            "https://worldsoccertalk.com/wp-content/uploads/2022/06/Darwin-Nunez-Liverpool-1000x600.jpg",
          publishedAt: "2022-06-17T13:00:45Z",
          content:
            "Darwin Núñez enters a Liverpool squad that was one game away from completing an illustrious quadruple. In the end, the Reds won the two lesser trophies of that set, the FA Cup and the League Cup. It … [+5351 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "CNW Group",
          title:
            "New Content Series Explores Innovative Environmental Projects Lead by Indigenous Peoples",
          description:
            "The Weather Network announced today that they will be airing Power to the People, a weekly documentary series that explores the renewable energy revolution...",
          url: "https://finance.yahoo.com/news/content-series-explores-innovative-environmental-130000335.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/gDP0qlh.wN_EJRyV5_WbNQ--~B/aD05Njt3PTQwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/cnwgroup.com/22eb8400371102236f365cec2b0ba12a",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Documentary Power to the People Highlights a Way out of the Climate Crisis and Begins Airing June 17, 2022\r\nOAKVILLE, ON, June 17, 2022 /CNW/ - The Weather Network announced today that they will be a… [+3678 chars]",
        },
        {
          source: { id: "bleacher-report", name: "Bleacher Report" },
          author: "Abbey Mastracco",
          title:
            "Good or Bad, Expect John Tortorella's Tenure With the Flyers to Be Eventful",
          description:
            "John Tortorella will be back behind an NHL bench next season, as the veteran coach has reportedly reached a four-year deal with the Philadelphia Flyers.  And...",
          url: "https://bleacherreport.com/articles/10038971-good-or-bad-expect-john-tortorellas-tenure-with-the-flyers-to-be-eventful",
          urlToImage:
            "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_3800,q_95/v1655429691/yoaolhlencmas0obtwde.jpg",
          publishedAt: "2022-06-17T12:48:59Z",
          content:
            "Jeff Vinnick\r\nJohn Tortorella will be back behind an NHL bench next season, as the veteran coach has reportedly agreed to a four-year, $16 million deal with the Philadelphia Flyers.\r\nThere are a lot … [+6216 chars]",
        },
        {
          source: { id: "cbs-news", name: "CBS News" },
          author: null,
          title: "Election standoff in New Mexico continues as deadline looms",
          description:
            "Standoff between GOP-dominated county commission and New Mexico's Democratic secretary of state over commission's conspiracy-fueled refusal to certify election results comes to a head Friday.",
          url: "https://www.cbsnews.com/news/new-mexico-election-crisis-deadline-couey-griffin/",
          urlToImage:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2022/06/17/2b0d1018-a731-4b9f-b385-32a47317e428/thumbnail/1200x630/10c016d96bb36317ad41fb64ee15848a/ap22166611626150.jpg",
          publishedAt: "2022-06-17T12:45:41Z",
          content:
            "A standoff between a Republican-dominated county commission and New Mexico's Democratic secretary of state over the commission's conspiracy-fueled refusal to certify election results comes to a head … [+4511 chars]",
        },
        {
          source: { id: null, name: "Space Daily" },
          author: null,
          title:
            "German radar satellite TerraSAR-X - 15 years in space and still in perfect shape",
          description:
            "Berlin, Germany (SPX) Jun 16, 2022\n\n\nFifteen years - who would have thought it? The German radar satellite TerraSAR-X, which was launched from the Baikonur Cosmodrome in Kazakhstan at 08:14 local time on 15 June 2007, was originally designed to last five and …",
          url: "https://www.spacedaily.com/reports/German_radar_satellite_TerraSAR_X___15_years_in_space_and_still_in_perfect_shape_999.html",
          urlToImage:
            "https://www.spxdaily.com/images-hg/terrasar-x-tandem-x-satellites-formation-flight-hg.jpg",
          publishedAt: "2022-06-17T12:35:55Z",
          content:
            "Fifteen years - who would have thought it? The German radar satellite TerraSAR-X, which was launched from the Baikonur Cosmodrome in Kazakhstan at 08:14 local time on 15 June 2007, was originally des… [+6494 chars]",
        },
        {
          source: { id: "politico", name: "Politico" },
          author: "By Shia Kapos",
          title: "Pritzker’s reverse psychology play",
          description: null,
          url: "https://www.politico.com/newsletters/illinois-playbook/2022/06/17/pritzkers-reverse-psychology-00040452",
          urlToImage:
            "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
          publishedAt: "2022-06-17T12:17:45Z",
          content:
            'TGIF, Illinois. We\'re off on Monday for Juneteenth, but back in your inbox Tuesday. In the meantime, consider marking the holiday by visiting a Black-owned business","link":{"target":"NEW","attribute… [+32393 chars]',
        },
        {
          source: { id: "the-washington-post", name: "The Washington Post" },
          author: "Maxine Joselow",
          title: "Meet Biden's 'energy whisperer' on climate, gas prices",
          description:
            "A little-known official at the State Department has emerged as President Biden's go-to adviser on ways of addressing surging gasoline prices while centering climate concerns, Maxine reports this morning.",
          url: "https://www.washingtonpost.com/politics/2022/06/17/meet-biden-energy-whisperer-climate-gas-prices/",
          urlToImage:
            "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TTEQQIHM3QI6ZH4QPHPR7MUCSY.jpg&w=1440",
          publishedAt: "2022-06-17T12:01:45Z",
          content:
            "Placeholder while article actions load\r\nGood morning and welcome to The Climate 202! Please wish a happy birthday today to Climate 202 host Maxine Joselow, who was born at an average atmospheric conc… [+10409 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "ET Online",
          title:
            "After Telegram and Twitter, Snapchat working on a paid subscription feature; will allow users early access to updates",
          description:
            "For Snapchat, it would be the first subscription product.",
          url: "https://economictimes.indiatimes.com/magazines/panache/after-telegram-and-twitter-snapchat-working-on-a-paid-subscription-feature-will-allow-users-early-access-to-updates/articleshow/92281250.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-92281270,width-1070,height-580,imgsize-120152,overlay-etpanache/photo.jpg",
          publishedAt: "2022-06-17T11:54:00Z",
          content:
            "Snap Inc, the parent company of photo messaging platform Snapchat, is currently testing Snapchat Plus, a paid subscription module which will give users early access to features as well as other tools… [+1589 chars]",
        },
        {
          source: { id: null, name: "The Boston Globe" },
          author: "Shannon Larson",
          title:
            "Montana governor faces backlash for taking ‘personal trip’ without explanation amid devastating Yellowstone floods",
          description:
            "Amid historic flooding in Yellowstone National Park, one key figure has been notably absent: Republican Montana Governor Greg Gianforte.",
          url: "https://www.bostonglobe.com/2022/06/17/nation/montana-governor-faces-backlash-taking-personal-trip-without-explanation-amid-devastating-yellowstone-floods/",
          urlToImage:
            "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/AqiOte31ybpzHQYb9MA55rFpZLk=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/EHSP3DZQL3LWLUUCFQ4KK56NOY.jpg",
          publishedAt: "2022-06-17T11:53:41Z",
          content:
            "Although Gianforte has taken to social media to provide frequent updates since the flooding in southwest Montana first began, questions began swirling after some noticed he had not been seen in perso… [+6057 chars]",
        },
        {
          source: { id: null, name: "Thesuperficial.com" },
          author: "Elena Jones",
          title:
            "Desi Arnaz Jr Net Worth: Age, Height, Weight, Assets, Family, Cars",
          description:
            "If you are a “I Love Lucy” fan then Desi Arnaz Jr. surely doesn’t need any introduction to you. For the rest, Arnaz is a popular actor, drummer and singer from America who has entertained people for years. Born to the celebrity parents – Desi Arnaz and Lucill…",
          url: "https://www.thesuperficial.com/desi-arnaz-jr-net-worth/",
          urlToImage:
            "https://www.thesuperficial.com/wp-content/uploads/2022/06/1-44.png",
          publishedAt: "2022-06-17T11:52:30Z",
          content:
            "If you are a “I Love Lucy” fan then Desi Arnaz Jr. surely doesn’t need any introduction to you. For the rest, Arnaz is a popular actor, drummer and singer from America who has entertained people for … [+11818 chars]",
        },
        {
          source: { id: null, name: "Thesuperficial.com" },
          author: "Liam Roberts",
          title: "Gregg Leakes Net Worth: Family, Assets, House, Awards, Age",
          description:
            "This post is about the late American reality TV personality Gregg Leakes, who lost his life after a long battle with colon cancer in September 2021. You might recognize him for appearing in the famous American reality TV show “The Real Housewives of Atlanta”.…",
          url: "https://www.thesuperficial.com/gregg-leakes-net-worth/",
          urlToImage:
            "https://www.thesuperficial.com/wp-content/uploads/2022/06/gregg-image-1.jpg",
          publishedAt: "2022-06-17T11:46:40Z",
          content:
            "This post is about the late American reality TV personality Gregg Leakes, who lost his life after a long battle with colon cancer in September 2021. You might recognize him for appearing in the famou… [+9304 chars]",
        },
        {
          source: { id: null, name: "Rappler" },
          author: "Ralf Rivas",
          title:
            "Kazuo Okada faces possible casino name change, Nasdaq IPO hurdles",
          description:
            "A tug of war in the boardroom with billions at stake, a possible rebranding and IPO, and a family dispute – the perfect storm for Japanese pachinko tycoon Kazuo Okada gets more complicated",
          url: "https://www.rappler.com/business/kazuo-okada-faces-possible-casino-name-change-nasdaq-ipo-hurdles/",
          urlToImage:
            "https://www.rappler.com/tachyon/2022/06/okada-june-16-2022.jpg",
          publishedAt: "2022-06-17T11:45:56Z",
          content:
            "At a glance\r\n<ul><li>The deposed board members of Okada Manila are still talking to investors about taking the company public on the Nasdaq, giving them both financial and legal hold on the property.… [+16198 chars]",
        },
        {
          source: { id: null, name: "Mirror Online" },
          author: "mirrornews@mirror.co.uk (Hana Carter)",
          title:
            "Rebel Wilson sizzles in bikini after clash with Aussie newspaper over new girlfriend",
          description:
            "Rebel Wilson, 42, looked incredible as she showed off her figure in a vintage bikini and huge white rimmed sunglasses. The actress appeared to be taking some time out after she was forced to disclose her sexuality by an Australian newspaper",
          url: "https://www.mirror.co.uk/3am/celebrity-news/rebel-wilson-sizzles-1960s-style-27260758",
          urlToImage:
            "https://i2-prod.mirror.co.uk/incoming/article27260246.ece/ALTERNATES/s1200/0_MAIN-rebel-wilson.jpg",
          publishedAt: "2022-06-17T11:38:26Z",
          content:
            "Rebel Wilson channelled Brigitte Bardot vibes as she posed on a boat after she broke her silence on an Australian newspapers attempt to 'out' her. \r\nThe 42-year-old actress wore a salmon pink checked… [+4235 chars]",
        },
        {
          source: { id: null, name: "Equitymaster.com" },
          author: null,
          title: "4 Sectors To Watch For Future Multibagger Stocks",
          description:
            "With India's economic recovery accelerating, these sectors are likely to give multibagger returns in the future.",
          url: "https://www.equitymaster.com/detail.asp?date=06/17/2022&story=4&title=4-Sectors-to-Watch-for-Future-Multibagger-Stocks",
          urlToImage:
            "https://c.ndtvimg.com/2022-06/aohl3vq_image_625x300_17_June_22.jpg",
          publishedAt: "2022-06-17T11:26:55Z",
          content:
            "4 sectors to watch for future multibagger stocks\r\nWhen it comes to investing in companies for the long-term, the most important aspect one must consider is the future of the company's product or serv… [+6201 chars]",
        },
        {
          source: { id: null, name: "TheJournal.ie" },
          author: "Carl Kinsella",
          title:
            "The Good Information Podcast: Misinformation - is there still time to win the battle?",
          description:
            "Are tools such as pre-bunking, strong legislation and public literacy enough to halt disinformation?",
          url: "https://www.thejournal.ie/misinformation-the-good-information-podcast-5784737-Jun2022/",
          urlToImage:
            "https://img2.thejournal.ie/article/5784737/river/?height=400&version=5787334",
          publishedAt: "2022-06-17T11:22:07Z",
          content:
            "WHETHER COVID-19 VACCINES, the war in Ukraine, or any major election that has taken place in recent memory, misinformation has become a scourge at every turn.\r\nOur priority in shining a spotlight on … [+1103 chars]",
        },
        {
          source: { id: null, name: "Blockworks.co" },
          author: "Shalini Nagarajan",
          title:
            "Q&A: NFT.NYC Producer Says Trading Most Boring Part of the Ecosystem",
          description:
            "Cryptocurrency valuations are down and so are NFT floor prices, but the annual NFT.NYC event is going full steam ahead\nThe post Q&A: NFT.NYC Producer Says Trading Most Boring Part of the Ecosystem appeared first on Blockworks.",
          url: "http://blockworks.co/qa-nft-nyc-producer-trading-most-boring-part-ecosystem/",
          urlToImage: "https://blockworks.co/wp-content/uploads/2022/02/NFT.jpg",
          publishedAt: "2022-06-17T11:09:52Z",
          content:
            "<ul><li>A fourth annual NFT (non-fungible token) event featuring 1,500 speakers will take place next week across seven venues in New York City</li><li>We don’t allow people to come and talk about cry… [+4682 chars]",
        },
      ],
    };
  
    SPOTLIGHT_1(data.articles);
  }
  
  getData11();
  
  function getData12() {
    let data = {
      status: "ok",
      totalResults: 174,
      articles: [
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Alessandro Villadei",
          title:
            "Valens Semiconductor: An Overlooked Company With Incredible Potential",
          description:
            "Valens Semiconductor operates in a rapidly developing market that is now being hampered by chip shortages, inflation, and macroeconomic instability. Click here to read more on VLN.",
          url: "https://seekingalpha.com/article/4518957-valens-semiconductor-overlooked-company-incredible-potential",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1313381966/image_1313381966.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:34:06Z",
          content:
            "Jae Young Ju/iStock via Getty Images\r\nIntroduction\r\n Because there have been no analyses about Valens published on Seeking Alpha, the purpose of this article is to provide a full, comprehensive overv… [+23336 chars]",
        },
        {
          source: { id: null, name: "Current.org" },
          author: "Current",
          title: "Is It Time For NPR’s “All Things Considered” To Be Rethought?",
          description:
            "“Its format and clock have remained basically the same for a generation. Meanwhile, there’s been considerable swirl and change in media consumption and audio competition. … Ironically, part of the answer may lie in letting All Things Considered be free from t…",
          url: "http://current.org/2022/06/why-its-time-to-reconsider-how-all-things-considered-can-expand-its-service-for-todays-listeners/",
          urlToImage:
            "https://i0.wp.com/current.org/wp-content/uploads/2022/06/iStock-1138420319-e1655303018668.jpeg?fit=1170%2C658&ssl=1",
          publishedAt: "2022-06-17T13:31:00Z",
          content:
            "I love All Things Considered. It always has been, and remains, my favorite public radio program. \r\nAll Things Considered was the first public radio program I ever heard driving around in the back sea… [+20408 chars]",
        },
        {
          source: { id: null, name: "PRNewswire" },
          author: null,
          title:
            "At 13.9% CAGR, Global Real World Evident Solutions Market Size & Share to Hit USD 2.57 Billion by 2028 | RWE Solutions Industry Trends, Growth, Value, Statistics, Analysis & Forecast Report by Zion Market Research",
          description:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- As per Zion Market Research study, The global real-world evidence solutions market reached the value of USD 1.29 billion in 2021 and is estimated to expand at a CAGR of 13.9 percent during the forecast period. The marke…",
          url: "https://www.prnewswire.com/news-releases/at-13-9-cagr-global-real-world-evident-solutions-market-size--share-to-hit-usd-2-57-billion-by-2028--rwe-solutions-industry-trends-growth-value-statistics-analysis--forecast-report-by-zion-market-research-301570308.html",
          urlToImage:
            "https://mma.prnewswire.com/media/1605489/Zion_Market_Research_Logo.jpg?p=facebook",
          publishedAt: "2022-06-17T13:30:00Z",
          content:
            "NEW YORK, June 17, 2022 /PRNewswire/ -- As per Zion Market Research study, The global real-world evidence solutions market reached the value of USD 1.29 billion in 2021 and is estimated to expand at … [+14582 chars]",
        },
        {
          source: { id: null, name: "Jewishnews.co.uk" },
          author: null,
          title: "OPINION: New UAE-Israel trade deal can last the sands of time",
          description:
            "Jon Medved, OurCrowd CEO and Dr. Sabah al Binali, OurCrowd Arabia executive chairman, set the scene on a prosperous new era of free trade relations between the UAE and Israel.",
          url: "https://www.jewishnews.co.uk/opinion-new-uae-israel-trade-deal-can-last-the-sands-of-time/",
          urlToImage:
            "https://static.jewishnews.co.uk/jewishnews/uploads/2020/09/200831-JINIPIX-6000-1-1024x640.jpg",
          publishedAt: "2022-06-17T13:27:51Z",
          content:
            "The Sand Curtain between Israel and the United Arab Emirates (UAE) has come down and there is no better proof than the free trade agreement the two nations signed last week, the first of its kind bet… [+3775 chars]",
        },
        {
          source: { id: null, name: "PR Daily" },
          author: "Allison Carter",
          title:
            "Ragan celebrates its Top Women in Communications honorees for 2022 in NYC",
          description:
            "Hundreds gathered at the Edison Ballroom in New York City Thursday to celebrate the achievements of a class of extraordinary women. The honorees for Ragan and PR Daily’s Top Women in Communications Awards for 2022 include young pros making a name for themselv…",
          url: "https://www.prdaily.com/ragan-celebrates-its-top-women-in-communications-honorees-for-2022-in-nyc/",
          urlToImage:
            "https://s39940.pcdn.co/wp-content/uploads/2022/06/champagne-1.jpeg",
          publishedAt: "2022-06-17T13:26:50Z",
          content:
            "Women toast at the 2022 Top Women in Communications Awards, sponsored by Ragan and PR Daily. Photo by Zandy Mangold.\r\nThe honorees for Ragan and PR Daily’s Top Women in Communications Awards for 2022… [+21021 chars]",
        },
        {
          source: { id: null, name: "CBS Sports" },
          author: "Dan Schneier",
          title:
            "Fantasy Baseball Today: Joe Musgrove cements SP1 status, Kevin Gausman gets shelled and more from Thursday",
          description:
            "News, notes and analysis from a light Thursday of baseball.",
          url: "https://www.cbssports.com/fantasy/baseball/news/fantasy-baseball-today-joe-musgrove-cements-sp1-status-kevin-gausman-gets-shelled-and-more-from-thursday/",
          urlToImage:
            "https://sportshub.cbsistatic.com/i/r/2021/04/20/38517b6b-12fa-463b-a008-bec42fd3904f/thumbnail/1200x675/dfc7a3850d366c9ed1620832ec753d11/joe-musgrove-padres.jpg",
          publishedAt: "2022-06-17T13:23:39Z",
          content:
            "Happy Friday, everyone! As usual, it was a light slate on Thursday but we got things kicked off in fashion early because Joe Musgrovewas on the mound for a late afternoon game. It's an absolute joy t… [+5668 chars]",
        },
        {
          source: { id: "politico", name: "Politico" },
          author: "By Lara Korte, Jeremy B. White and Sakura Cannestra",
          title: "Could liability insurance prevent gun violence in California?",
          description: null,
          url: "https://www.politico.com/newsletters/california-playbook/2022/06/17/could-liability-insurance-prevent-gun-violence-in-california-00040327",
          urlToImage:
            "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
          publishedAt: "2022-06-17T13:16:44Z",
          content:
            "Presented by California Environmental Voters\r\nTHE BUZZ:California already requires gun owners to have a safety certificate, background check, and go through a waiting period before they can take thei… [+24943 chars]",
        },
        {
          source: { id: null, name: "Frequentmiler.com" },
          author: "Frequent Miler",
          title:
            "Brex closing many accounts, “changing strategy”. Should you transfer speculatively or cash out?",
          description:
            "Brex sent emails to many cardholders yesterday (including members of the Frequent Miler team) indicating that our accounts will be closed on 8/15/22. Brex has posted information on its website indicating that these closures are due to changes to their strateg…",
          url: "https://frequentmiler.com/brex-closing-many-accounts-changing-strategy-should-you-transfer-speculatively-or-cash-out/",
          urlToImage:
            "https://frequentmiler.com/wp-content/uploads/2021/05/pxl_20210317_1234337301087545470800909371..jpg",
          publishedAt: "2022-06-17T13:13:05Z",
          content:
            "Brex sent emails to many cardholders yesterday (including members of the Frequent Miler team) indicating that our accounts will be closed on 8/15/22. Brex has posted information on its website indica… [+6273 chars]",
        },
        {
          source: { id: null, name: "Kunstler.com" },
          author: "James Howard Kunstler",
          title: "How Low Can You Go?",
          description:
            "Lots of things are going south all at once….\nThe post How Low Can You Go? appeared first on Kunstler.",
          url: "https://kunstler.com/clusterfuck-nation/how-low-can-you-go/",
          urlToImage:
            "http://kunstler.com/wp-content/uploads/2016/03/kunstler_thunbnail.jpg",
          publishedAt: "2022-06-17T13:10:54Z",
          content:
            "Clusterfuck NationFor your reading pleasure Mondays and Fridays\r\nSupport this blog by visiting Jims Patreon Page\r\nAnd thanks to all my Patrons for your support\r\nRemember the limbo? It was a dance fad… [+6624 chars]",
        },
        {
          source: { id: null, name: "CBS Sports" },
          author: "Jordan Dajani",
          title:
            "Justin Simmons Q&A: Broncos All-Pro safety on Russell Wilson addition, new Denver 'D' and new coaching staff",
          description:
            "Simmons spoke with CBS Sports about the Broncos' big changes for 2022",
          url: "https://www.cbssports.com/nfl/news/justin-simmons-q-a-broncos-all-pro-safety-on-russell-wilson-addition-new-denver-d-and-new-coaching-staff/",
          urlToImage:
            "https://sportshub.cbsistatic.com/i/r/2022/06/17/ebd95ba2-f705-4b4d-a7c8-a11f6751472d/thumbnail/1200x675/d82efece4d652e95f6b4264f507d7695/justinsimmons.jpg",
          publishedAt: "2022-06-17T13:09:19Z",
          content:
            "The Denver Broncos were one of the big winners of the NFL offseason, as general manager George Paton went out and acquired a legitimate starting quarterback -- something the franchise has struggled t… [+5741 chars]",
        },
        {
          source: { id: null, name: "The Gadgeteer" },
          author: "Cat Green",
          title: "FlexiSpot Pro Plus (E7) standing desk review",
          description:
            "REVIEW – One of the most common things I’ve been hearing lately is that “sitting is killing us”.  Yes, I am friends with some eccentric people, and no I do not think my couch is from another planet waiting to eat me. But in the time that “work from home” beca…",
          url: "https://the-gadgeteer.com/2022/06/17/flexispot-pro-plus-e7-standing-desk-review/",
          urlToImage:
            "https://the-gadgeteer.com/wp-content/uploads/2022/06/Flexispot_standing_desk_13.jpg",
          publishedAt: "2022-06-17T13:03:29Z",
          content:
            "We use affiliate links. If you buy something through the links on this page, we may earn a commission at no cost to you. Learn more.\r\nREVIEW One of the most common things Ive been hearing lately is t… [+6578 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "PR Newswire",
          title:
            "HONK Announces Towbook Integration Testing with Select Towing and Roadside Assistance Partners",
          description:
            "HONK Technologies, the industry-leading digital roadside assistance and vehicle transport company, today announced that it is currently exploring integration...",
          url: "https://finance.yahoo.com/news/honk-announces-towbook-integration-testing-130300453.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/0ugk8XgrkPyiJfvpLF7ESg--~B/aD0zMDA7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/85d54cbae66eb11516f9cf2d033af083",
          publishedAt: "2022-06-17T13:03:00Z",
          content:
            "Initial Integration Lets HONK Partners Receive, Accept and Manage Jobs Directly from Towbook; Information on Availability to be Released Later This Year\r\nLOS ANGELES, June 17, 2022 /PRNewswire/ -- HO… [+2744 chars]",
        },
        {
          source: { id: null, name: "Vulture" },
          author: "Ben Rosenstock",
          title: "The Boys Recap: No More Secrets",
          description:
            "With Soldier Boy on the scene and Homelander’s continued spiraling to the top, The Boys is heating up.",
          url: "http://www.vulture.com/article/the-boys-season-3-episode-5-recap-the-last-time-to-look-on-this-world-of-lies.html",
          urlToImage:
            "https://pyxis.nymag.com/v1/imgs/dce/ec3/36fcfd0f69ac97a361a05e424782fc2619-the-boys-recaps.1x.rsocial.w1200.jpg",
          publishedAt: "2022-06-17T13:00:37Z",
          content:
            "With the unleashing of Soldier Boy and the rise of Homelander, everything is starting to tighten up and come together. By the end of The Last Time to Look on This World of Lies, the stakes have been … [+9458 chars]",
        },
        {
          source: { id: null, name: "Seeking Alpha" },
          author: "Lawrence Fuller",
          title: "The Market Is Not The Economy",
          description:
            "The economy is in a much better situation than the stock market. See why I believe that Pundits are conflating the two, which is raising recession fears.",
          url: "https://seekingalpha.com/article/4518954-market-not-economy",
          urlToImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1257405518/image_1257405518.jpg?io=getty-c-w750",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "naphtalina/iStock via Getty Images\r\nYesterday stocks sank to new lows for this bear market, as recession fears are raging. Recessions are as much about psychology as they are about economics, because… [+6064 chars]",
        },
        {
          source: { id: null, name: "Forbes" },
          author:
            "Kristin Stoller, Forbes Staff, \n Kristin Stoller, Forbes Staff\n https://www.forbes.com/sites/kristinstoller/",
          title:
            "Inside The Forbes Under 30 EMEA Summit: Tackling Conflicts And Forging Co-Existence In Israel",
          description:
            "It’s been two weeks since I returned from our 2022 Forbes Under 30 Summit EMEA in Israel and it’s still hard for me to answer everyone’s first question: What was the best part?",
          url: "https://www.forbes.com/sites/kristinstoller/2022/06/17/inside-the-forbes-under-30-emea-summit-tackling-conflicts-and-forging-co-existence-in-israel/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve//62ab6fb505f1a8a6978819cf/0x0.jpg?format=jpg&width=1200",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "We opened the fifth Forbes Under 30 Summit EMEA at the Tel Aviv Stock Exchange with a bell ringing ceremony last month.\r\nErez Elma Uzir\r\nIts been two weeks since I returned from our 2022 Forbes Under… [+4382 chars]",
        },
        {
          source: { id: null, name: "Thegatewaypundit.com" },
          author: "Cara Castronuova",
          title:
            "J6 Prisoner Punished With “DIESEL THERAPY”, His Public Defender MISSING IN ACTION! HIS BUMBLE ‘MATCH’ TURNED HIM IN!!",
          description:
            "*Co-Authored by Guest Contributor Annie Lee Andrew Taake is a 33 year old man from Houston Texas. He was arrested near his home in July 2021, for his alleged involvement on January 6th. This man was turned into the FBI by a romantic match he met on the popula…",
          url: "https://www.thegatewaypundit.com/2022/06/j6-prisoner-punished-diesel-therapy-public-defender-missing-action-bumble-match-turned/",
          urlToImage:
            "https://www.thegatewaypundit.com/wp-content/uploads/andrew-taake-2-1.jpg",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "*Co-Authored by Guest Contributor Annie Lee\r\nAndrew Taake is a 33 year old man from Houston Texas. He was arrested near his home in July 2021, for his alleged involvement on January 6th.\r\nThis man wa… [+32960 chars]",
        },
        {
          source: { id: null, name: "Buffalo News" },
          author: "Natalie Brophy News Business Reporter",
          title:
            "New Western New York tech boot camp: 'A shining example of the power of diversity' - Buffalo News",
          description:
            "Nineteen people recently graduated from Buffalo's Tech Academy Data Analytics Bootcamp, a first of its kind in Western New York that was held at Seneca One tower.",
          url: "https://buffalonews.com/business/local/new-western-new-york-tech-boot-camp-a-shining-example-of-the-power-of-diversity/article_eeaa36a8-d091-11ec-9780-1b069dcfd9fe.html",
          urlToImage:
            "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/b/cf/bcfe2354-ddf6-11ec-b57e-af4c2a78f586/62912c5f54805.image.jpg?crop=1600%2C840%2C0%2C112&resize=1200%2C630&order=crop%2Cresize",
          publishedAt: "2022-06-17T13:00:00Z",
          content:
            "Namita Acharya and JahJah Quarles likely would never have crossed paths if they didn't share a common goal of breaking into Buffalo's fast-growing tech industry.\r\nAcharya, a 52-year-old from Williams… [+10247 chars]",
        },
        {
          source: { id: null, name: "Business Standard" },
          author: "Business Standard",
          title:
            "Why Reliance opted out of TV rights in battle for IPL media rights",
          description:
            "Viacom18 paid 238 billion rupees ($3.1 billion) for the rights to stream the IPL tournament, one of the world's most-watched sporting events, almost on par with what Disney shelled out",
          url: "https://www.business-standard.com/article/companies/why-reliance-opted-out-of-tv-rights-in-battle-for-ipl-media-rights-122061700836_1.html",
          urlToImage:
            "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/12/full/1655058566-7024.jpg",
          publishedAt: "2022-06-17T12:54:00Z",
          content:
            "Mukesh Ambani’s group ultimately dropped the pursuit of television broadcast rights to India’s top cricket league that Walt Disney Co. secured for $3 billion as the Indian conglomerate saw limited op… [+3569 chars]",
        },
        {
          source: { id: "business-insider", name: "Business Insider" },
          author: "insider@insider.com (Sponsor Post)",
          title:
            "Being a successful merchant is simple — give the customers what they want. Research highlights the top 4 consumer frustrations when shopping.",
          description:
            "Unfortunately merchants are still falling short when it comes to providing a seamless shopping experience.",
          url: "https://www.businessinsider.com/sc/top-4-consumer-shopping-frustrations",
          urlToImage:
            "https://i.insider.com/629a2eb73efa8c0019aabfac?width=1200&format=jpeg",
          publishedAt: "2022-06-17T12:50:00Z",
          content:
            "A frustrated customer is bad news for retailers particularly retailers that rely on e-commerce. When your online retail experience doesn't match your shoppers' expectations, they may quickly lose pat… [+6676 chars]",
        },
        {
          source: { id: null, name: "Forbes" },
          author:
            "Gidi Cohen, Forbes Councils Member, \n Gidi Cohen, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/gidicohen/",
          title:
            "Ransomware Defense: Preventative Techniques To Combat Attack Methods Of Today’s Cybercriminal Gangs",
          description:
            "Ransomware attacks continue to be a top-of-mind security threat for CISOs as cybercriminals become more prolific.",
          url: "https://www.forbes.com/sites/forbestechcouncil/2022/06/17/ransomware-defense-preventative-techniques-to-combat-attack-methods-of-todays-cybercriminal-gangs/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve//5f84c39410a712d6664a5d25/0x0.jpg?format=jpg&width=1200",
          publishedAt: "2022-06-17T12:45:00Z",
          content:
            "Gidi Cohen is the founder of Skybox Security, where he helps customers secure their attack surface and stay ahead of emerging threats.\r\ngetty\r\nRansomware attacks continue to be a top-of-mind security… [+4786 chars]",
        },
      ],
    };
  
    BUSINESSSPOTLIGHT(data.articles);
  }
  
  getData12();
  
  function append_1(data) {
    for (let i = 0; i < 2; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
        urlToImage.setAttribute("id", "p1");
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
      /* title.style.fontSize="30px"; */
      let description = document.createElement("p");
      description.innerText = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(urlToImage, author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#minidiv_1").append(div);
    }
  }
  
  function append_minidiv_2(data) {
    for (let i = 1; i < 3; i++) {
      let div = document.createElement("div");
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerText = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#minidiv_2").append(div);
    }
  }
  
  function append_2(data) {
    for (let i = 5; i < 10; i++) {
      let div = document.createElement("div");
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_2_av_1").append(div);
    }
  }
  
  function append_3(data) {
    for (let i = 10; i < 13; i++) {
      let div = document.createElement("div");
      //  div.style.border="1px solid green"
      div.style.width = "fit-content";
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
      urlToImage.style.height = "150px";
      urlToImage.style.width = "fit-content";
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      /* author.style.width = "60%" */
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
      /* title.style.width = "60%" */
      let description = document.createElement("p");
      description.innerText = data[i].description;
      /* description.style.width = "60%" */
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
      /* publishedAt.style.width = "60%" */
      let hr = document.createElement("hr");
  
      div.append(urlToImage, author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_3_av_1").append(div);
    }
  }
  
  ///NATIONAL FEATURES
  
  function append_national_1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerText = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_2").append(div);
    }
  }
  
  function append_national_2(data) {
    for (let i = 1; i < 6; i++) {
      let div = document.createElement("div");
  
      //  let urlToImage=document.createElement("img")
      //    if(i===0)
      //    {
      //     urlToImage.src=data[i].urlToImage;
      //    }
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_2").append(div);
    }
  }
  
  function append_national_3(data) {
    for (let i = 6; i < 10; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(urlToImage, author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_2").append(div);
    }
  }
  
  // BUSINESS_MONEY_1
  
  function BUSINESS_MONEY_1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_3").append(div);
    }
  }
  
  function BUSINESS_MONEY_2(data) {
    for (let i = 1; i < 4; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_3").append(div);
    }
  }
  
  function BUSINESS_MONEY_3(data) {
    for (let i = 4; i < 7; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_3").append(div);
    }
  }
  
  // CRYPTO_CORNER_1
  
  function CRYPTO_CORNER_1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_4").append(div);
    }
  }
  
  function CRYPTO_CORNER_2(data) {
    for (let i = 1; i < 3; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_4").append(div);
    }
  }
  
  function CRYPTO_CORNER_3(data) {
    for (let i = 3; i < 5; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_4").append(div);
    }
  }
  
  function CRYPTO_CORNER_4(data) {
    for (let i = 5; i < 7; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_d_av_4").append(div);
    }
  }
  
  // SPORTS
  
  function SPORTS_1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_5").append(div);
    }
  }
  
  function SPORTS_2(data) {
    for (let i = 1; i < 3; i++) {
      let div = document.createElement("div");
  
      //  let urlToImage=document.createElement("img")
      //    if(i===0)
      //    {
      //     urlToImage.src=data[i].urlToImage;
      //    }
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_5").append(div);
    }
  }
  
  function SPORTS_3(data) {
    for (let i = 3; i < 5; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_5").append(div);
    }
  }
  
  function SPORTS_4(data) {
    for (let i = 5; i < 7; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_d_av_5").append(div);
    }
  }
  
  // ENTERTAINMENT
  
  function ENTERTAINMENT_1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_6").append(div);
    }
  }
  
  function ENTERTAINMENT_2(data) {
    for (let i = 1; i < 4; i++) {
      let div = document.createElement("div");
  
      //  let urlToImage=document.createElement("img")
      //    if(i===0)
      //    {
      //     urlToImage.src=data[i].urlToImage;
      //    }
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_6").append(div);
    }
  }
  
  function ENTERTAINMENT_3(data) {
    for (let i = 4; i < 7; i++) {
      let div = document.createElement("div");
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_6").append(div);
    }
  }
  
  // container_7_Av_7
  
  function CULTUREANDSOCIETY(data) {
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
      urlToImage.style.height = "250px";
      urlToImage.style.width = "fit-content";
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerText = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#container_7_Av_7").append(div);
    }
  }
  
  //  magzine
  
  function MAGAZINE__1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      if (i === 0) {
        urlToImage.src = data[i].urlToImage;
      }
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let hr = document.createElement("hr");
  
      div.append(urlToImage, author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_8_min_1").append(div);
    }
  }
  
  function MAGAZINE__2_min_2(data) {
    for (let i = 1; i < 5; i++) {
      let div = document.createElement("div");
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_8_min_2").append(div);
    }
  }
  
  function MAGAZINE__2(data) {
    for (let i = 5; i < 11; i++) {
      let div = document.createElement("div");
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_8").append(div);
    }
  }
  
  function MAGAZINE__3(data) {
    for (let i = 11; i < 14; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
      urlToImage.style.height = "150px";
      urlToImage.style.width = "fit-content";
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let hr = document.createElement("hr");
  
      div.append(urlToImage, author, title, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_8").append(div);
    }
  }
  
  //  WORLD_NEWS_1
  
  function WORLD_NEWS_1(data) {
    for (let i = 0; i < 1; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_a_av_9").append(div);
    }
  }
  
  function WORLD_NEWS_2(data) {
    for (let i = 1; i < 2; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_b_av_9").append(div);
    }
  }
  
  function WORLD_NEWS_3(data) {
    for (let i = 2; i < 4; i++) {
      let div = document.createElement("div");
  
      //  let urlToImage=document.createElement("img")
      //  urlToImage.src=data[i].urlToImage;
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let image = document.createElement("img");
      image.src = data[i].urlToImage;
      image.style.height = "80px";
      image.style.width = "fit-content";
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let hr = document.createElement("hr");
  
      div.append(author, title, image, description, publishedAt, hr);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_c_av_9").append(div);
    }
  }
  
  function WORLD_NEWS_4(data) {
    for (let i = 4; i < 5; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#block_d_av_9").append(div);
    }
  }
  
  //  Photos
  
  function photos(data) {
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
      urlToImage.style.height = "200px";
      urlToImage.style.width = "fit-content";
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
  
      author.style.color = "red";
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
      title.style.fontSize = "";
  
      div.append(urlToImage, author, title);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#container_10_Av_10").append(div);
    }
  }
  // SPOTLIGHT_1
  
  function SPOTLIGHT_1(data) {
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
      urlToImage.style.height = "200px";
      urlToImage.style.width = "fit-content";
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#container_11_Av_11").append(div);
    }
  }
  
  //  BUSINESSSPOTLIGHT
  function BUSINESSSPOTLIGHT(data) {
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
  
      let urlToImage = document.createElement("img");
      urlToImage.src = data[i].urlToImage;
      urlToImage.style.height = "250px";
      urlToImage.style.width = "fit-content";
  
      let publishedAt = document.createElement("p");
      publishedAt.innerText = data[i].publishedAt;
  
      let author = document.createElement("p");
      author.innerText = data[i].author;
      author.style.color = "red";
  
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
  
      let description = document.createElement("p");
      description.innerHTML = data[i].description;
  
      div.append(urlToImage, author, title, description, publishedAt);
      div.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(data[i]));
        window.location.href = "fullnews.html";
      });
      document.querySelector("#container_12_Av_12").append(div);
    }
  }
  