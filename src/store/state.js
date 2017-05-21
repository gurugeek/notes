import { ID } from '../util'

const MOBILE_WINDOW_WIDTH = 768

export default {
  sidebarSorting: 'createdAt',
  sidebarSearch: '',
  sidebarVisible: window.innerWidth > MOBILE_WINDOW_WIDTH,
  selectedNoteId: null,
/*
  sidebar: {
    visible: true,
    sorting: 'createdAt',
    search: '',
  },
*/
  toolbar: {
    visible: false,
    x: 0,
    y: 0
  },

  notes: [
    {
      id: ID(),
      title: 'Example',
      text: 'My first note',
      markers: [],
      isStarred: false,
      createdAt: 1491385169661,
      modifiedAt: 1491385169665
    }
  ]
}
