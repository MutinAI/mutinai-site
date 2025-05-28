import fs from "fs";
import path from "path";
import { docxToHtml } from "docx-to-html";

export const metadata = { title: "MutinAI • White Paper" };

export default async function WhitePaper() {
  // convert the uploaded .docx to HTML at build time
  const filePath = path.join(process.cwd(), "public", "assets", "Mutin AI White Paper (2).docx");
  const buffer = fs.readFileSync(filePath);
  const html = await docxToHtml(buffer);

  return (
    <article
      className="prose lg:prose-lg mx-auto py-12"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
