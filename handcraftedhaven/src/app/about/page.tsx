// This is the About page for the HandcraftedHaven website.

export const metadata = {
    title: "About Us | HandcraftedHaven",
    description:
      "Discover the story, mission, and people behind HandcraftedHaven — a marketplace celebrating artisan-made, sustainable treasures.",
    openGraph: {
      title: "About Us | HandcraftedHaven",
      description:
        "Explore the passion, creativity, and impact of our artisan community. Learn how HandcraftedHaven is redefining handmade in the modern world.",
      url: "https://yourdomain.com/about", // Need to be replaced later with the vercel 
      siteName: "HandcraftedHaven",
      images: [
        {
          url: "/images/about-og.jpg", // make sure this image exists or replace it
          width: 1200,
          height: 630,
          alt: "About HandcraftedHaven",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
  
  export default function About() {
    return (
      <h1>About Page</h1>
    );
  }
  