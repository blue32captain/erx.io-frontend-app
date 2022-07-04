export const TABS = [
  {
    label: 'Users',
    path: 'verified',
    component: '',
    actions: [
      // {
      //   event: 'add',
      //   text: 'Create user',
      // },
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Verification',
    path: 'unverified',
    component: '',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Locked',
    path: 'blocked',
    component: '',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  // {
  //   label: 'API Rates',
  //   path: 'api-rates',
  //   component: '',
  //   actions: [
  //     // {
  //     //   event: 'refresh',
  //     //   text: 'Refresh',
  //     // },
  //     {
  //       event: 'csv',
  //       text: 'Create CSV',
  //     },
  //   ],
  // },
]

export const USERS_LIST_COLUMNS = [
  { key: 'userPublicId', label: 'ID', type: 'string' },
  { key: 'username', label: 'Username', type: 'string', searchableKey: 'username' },
  { key: 'email', label: 'Email', type: 'email', searchableKey: 'emailKw' },
  { key: 'familyName', label: 'Family Name', type: 'string', searchableKey: 'familyNameKw' },
  { key: 'givenName', label: 'Given Name', type: 'string', searchableKey: 'givenNameKw' },
  { key: 'registrationDate', label: 'Registration Date', type: 'string' },
  { key: 'actions', label: '', type: '' },
]

export const COLUMNS_LIST = [
  USERS_LIST_COLUMNS,
  USERS_LIST_COLUMNS,
  USERS_LIST_COLUMNS,
  USERS_LIST_COLUMNS,
  USERS_LIST_COLUMNS,
]
