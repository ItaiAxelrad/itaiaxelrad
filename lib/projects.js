import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export const sortByDate = (projects) => projects.sort((a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  return -1;
});

export const getSortedProjectsData = (dir) => {
  // Get file names under /projects
  const projectsDirectory = path.join(process.cwd(), String(dir));
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.(md|mdx)$/, '');
    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort projects by date
  return sortByDate(allProjectsData);
};

export function getAllProjectIds(dir) {
  // Get file names under /projects
  const projectsDirectory = path.join(process.cwd(), String(dir));
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.(md|mdx)$/, ''),
    },
  }));
}

export async function getProjectData(id, dir) {
  // Get file names under /projects
  const projectsDirectory = path.join(process.cwd(), String(dir));
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
