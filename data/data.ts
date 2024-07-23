const currentYear = new Date().getFullYear();
const data = {
    sitename: "Rohen Renesh's Blog",
    sitetagline: "Something great is on the way! ✨ 🔥",
    siteurl: "https://github.com/rohenrenesh",
    sitelogo: "",
    title: "Coming Soon!",
    description: "Currently working to make this blog live. Thanks for patience🎉",
    newsletterheading: "Stay tuned for our inbox updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://github.com/rohenrenesh">Rohen Renesh</a>`,
    socialIconsHeading: "Follow 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [

        {
            icon: "X",
            link: "https://x.com/rohenrenesh",
        }

    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
