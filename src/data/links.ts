export type ContactLink = {
  label: string;
  value: string;
  href?: string;
  placeholder?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shrivar-singh-06b901251",
    href: "https://www.linkedin.com/in/shrivar-singh-06b901251/"
  },
  {
    label: "GitHub",
    value: "github.com/Shrivar3",
    href: "https://github.com/Shrivar3"
  },
  {
    label: "Email",
    value: "Add public email address",
    placeholder: true
  },
  {
    label: "CV",
    value: "Add CV download link",
    placeholder: true
  }
];
