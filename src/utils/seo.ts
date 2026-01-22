export const generateMetaTags = (title: string, description: string, url: string) => {
  return {
    title,
    description,
    url,
    ogTitle: title,
    ogDescription: description,
    ogImage: "https://hoainamute.github.io/MyProfile/avatars/IMG_1.jpg",
    ogUrl: url,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description
  };
};

export const schemaMarkup = (profileData: any) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  url: "https://hoainamute.github.io/MyProfile",
  image: profileData.avatar,
  jobTitle: profileData.role,
  sameAs: [
    profileData.github,
    profileData.linkedin
  ],
  description: profileData.about,
  email: profileData.email
});