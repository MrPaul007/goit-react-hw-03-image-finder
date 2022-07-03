import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";


export default function ImageGallery({items, onClick, children}) {  
  return(
    <>
      <ul className="ImageGallery">
        {items.map(({id, webformatURL, largeImageURL, tags}) => (
            <ImageGalleryItem 
              key={id}
              image={webformatURL}
              modalImage={largeImageURL}
              alt={tags}  
              onClick={onClick}            
            />
        ))}
      </ul> 
      {children}
    </>
 )   
}

// ContactList.defaultProps = {
//     contacts: [],
//     onDelete: () => {}
// };
  
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string,
//           name: PropTypes.string,
//           number: PropTypes.string
//         })
//       ).isRequired,
//     onDelete: PropTypes.func.isRequired
// };
