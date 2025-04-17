
export default async function ProjectImages() {
  try {
    fetch('https://api.imgur.com/3/account/RolandArtmeladze97/images', {
      headers: {
        Authorization: 'Client-ID 6c69e95f302c12b',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Error:', err));
  } catch (error) {
    console.error('Error fetching images:', error);
  } 
}
