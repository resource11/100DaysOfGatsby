import React from "react"
import styles from "./imagegallery.module.css"
import { useStaticQuery, graphql } from "gatsby"
const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const clImages = data.allCloudinaryMedia.edges
  return (
    <div>
      <div className={styles.imageGrid}>
        {clImages.map((image, index) => (
          <div className={styles.imageItem} key={`${index}-cl`}>
            <img src={image.node.secure_url} alt={"no alt :("} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ImageGallery

/* 
Here, you query all the Cloudinary images sourced into the `CloudinaryMedia` nodes with the `useStaticQuery` hook. In turn, you map through those image URLs to create a gallery with the component.
*/
