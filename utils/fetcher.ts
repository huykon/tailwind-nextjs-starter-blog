export async function fetcher(...args: unknown[]) {
  const res = await fetch(...args)
  return res.json()
}
