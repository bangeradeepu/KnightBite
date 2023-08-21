// import { styled } from '@mui/system'
// import { menuItemClasses } from '@mui/base/MenuItem'
// import { Dropdown, Menu, MenuItem, MenuButton } from "@mui/base";


// const blue = {
//     100: '#DAECFF',
//     200: '#99CCF3',
//     400: '#3399FF',
//     500: '#007FFF',
//     600: '#0072E5',
//     900: '#003A75',
//   }

//   const grey = {
//     50: '#f6f8fa',
//     100: '#eaeef2',
//     200: '#2e2e2e',
//     300: '#afb8c1',
//     400: '#8c959f',
//     500: '#6e7781',
//     600: '#57606a',
//     700: '#424a53',
//     800: '#32383f',
//     900: '#24292f',
//   }
  
  
  
//   const StyledListbox = styled('ul')(
//     ({ theme }) => `
//     font-family: IBM Plex Sans, sans-serif;
//     font-size: 0.875rem;
//     box-sizing: border-box;
//     padding: 6px;
//     margin: 12px 0;
//     min-width: 160px;
//     border-radius: 20px;
//     overflow: auto;
//     outline: 0px;
//     zindex:2;
//     height: '40px';
//     margin-top:30px;
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
//     `
//   )
  
//   const StyledMenuItem = styled(MenuItem)(
//     ({ theme }) => `
//     list-style: none;
//     padding: 15px 0px 0px 5px;
//     border-radius: 8px;
//     cursor: default;
//     user-select: none;
//     zindex:2;
  
//     &:last-of-type {
//       border-bottom: none;
//     }
  
//     &.${menuItemClasses.focusVisible} {
//       outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//       background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//       color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     }
  
//     &.${menuItemClasses.disabled} {
//       color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//     }
  
//     &:hover:not(.${menuItemClasses.disabled}) {
//       background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//       color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     }
//     `
//   )
  
//   const TriggerButton = styled(MenuButton)(
//     ({ theme }) => `
//     font-family: IBM Plex Sans, sans-serif;
//     font-size: 0.875rem;
//     font-weight: 600;
//     box-sizing: border-box;
//     min-height: calc(1.5em + 22px);
//     border-radius: 30px;
//     top:-1px;
//     padding: 8px 14px;
//     line-height: 1.5;
//     width:150px;
//     zindex:2;
  
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
//     transition-property: all;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     transition-duration: 120ms;
  
//     &:hover {
//       background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//       border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
//     }
  
//     &:focus-visible {
//       border-color: ${blue[400]};
//       outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
//     }
//     `
//   )
//   const LocationDropdown = ({
//     selectedLocation,
//     availableLocations,
//     handleLocationChange,
//   }) => {
//     return (
//       <div style={{ margin: '20px' }}>
//         <Dropdown>
//           <TriggerButton style={{ display: 'flex', alignItems: 'center', top:'10px',position: 'relative', zIndex: 2}}>
//             <span style={{ marginRight: '10px' }}>
//             <FontAwesomeIcon
//     icon={faMapLocationDot}
//     style={{
//       color: '#ff7800',
//       width: '20px',
//       height:'20px', // Set your primary color
    
//     }}
//   />
//             </span>
//             <span style={{ marginRight: '14px' }}>Locations</span>
//             <FontAwesomeIcon
//               icon={faChevronDown} 
//               style={{ color: '#000' }}
//             />
//           </TriggerButton>
//           <Menu slots={{ listbox: StyledListbox }}>
//             {availableLocations.map((location) => (
//               <StyledMenuItem
//                 key={location}
//                 disabled={location === selectedLocation}
//               >
//                 <Checkbox onChange={() => handleLocationChange(location)} />
//                 {location}
//               </StyledMenuItem>
//             ))}
//           </Menu>
//         </Dropdown>
//       </div>
//     )
//   }
  
//   export {
//     blue, grey, StyledListbox, StyledMenuItem, TriggerButton, LocationDropdown
//   }


import { styled } from '@mui/system'
import MenuItem from '@mui/base/MenuItem'

const SelectedTags = ({ selectedTags, handleRemoveTag }) => {
  const tagRows = []
  const rowSize = 2

  for (let i = 0; i < selectedTags.length; i += rowSize) {
    const tagRow = selectedTags.slice(i, i + rowSize)
    tagRows.push(tagRow)
  }

  return (
    <div className='selected-tags-container'>
      {tagRows.map((row, rowIndex) => (
        <div key={rowIndex} className='tag-row'>
          {row.map((tag) => (
            <div key={tag} className='selected-tag-container'>
              <div className='selected-tag'>
                <span className='tag-label'>{tag}</span>
                <button
                  className='remove-tag-button'
                  onClick={() => handleRemoveTag(tag)}
                  onMouseOver={(e) => (e.target.style.color = 'red')}
                  onMouseOut={(e) => (e.target.style.color = '#000')}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}


const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    /* Your StyledMenuItem styles */
  `
)

const StyledListbox = styled('ul')(
  ({ theme }) => `
    max-height: 120px;
    overflow-y: auto;
    border: 10px , #000;
    border-radius: 10px;
    background-color: #e2dddd;
    list-style: none;
    width: 170px;
    left: 50px;
    margin-left: 10px;
    padding-left: 10px;
    margin-top: 10px;
    /* Your StyledListbox styles */
  `
)

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
    /* Your TriggerButton styles */
  `
)
export{
  SelectedTags, StyledMenuItem, TriggerButton
}