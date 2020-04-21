import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const ImageTransformCoudinary = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "castaway-key-umbrellas-closeup" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return (
    <div className="image-example">
      <h2>Fluid images loaded from Cloudinary</h2>
      <Image
        fluid={data.image.cloudinary.fluid}
        alt="Castaway Cay lovely ocean view"
      />
    </div>
  )
}

export default ImageTransformCoudinary
