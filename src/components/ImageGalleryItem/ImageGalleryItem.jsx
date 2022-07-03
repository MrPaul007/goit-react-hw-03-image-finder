import PropTypes from "prop-types";

export default function ImageGalleryItem({ image, modalImage, alt, onClick }) {
  return(
    <li className="ImageGalleryItem" onClick={()=>onClick(modalImage, alt)}>
        <img src={image} alt={alt} data-source={modalImage} className="ImageGalleryItemImage" />    
    </li>
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
