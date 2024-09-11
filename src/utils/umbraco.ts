// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getContent(contentType: string): Promise<any> {
  const data = await fetch(`https://cdn.umbraco.io/content/type?contentType=${contentType}`, {
    headers: { 'umb-project-alias': 'adams-discreet-penguin' },
  });

  return await data.json();
}
