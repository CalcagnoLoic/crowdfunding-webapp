import documentationTemplate from "./documentationTemplate.mdx";
import "../public/style/tailwind.css";

export default {
  parameters: {
    docs: {
      page: documentationTemplate,
      toc: true,
    }
  },
};
