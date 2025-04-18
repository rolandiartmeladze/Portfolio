const IMGUR_CLIENT_ID = "6c69e95f302c12b";

export async function fetchImgurImages(albumHash: string) {
  const res = await fetch(`https://api.imgur.com/3/album/${albumHash}/images`, {
    headers: {
      Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.data?.error || "Imgur fetch failed");
  }

  return data.data;
}
