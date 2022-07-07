export function getColor(color: string | null | undefined): string {
  if (color === 'primary') {
    return '#07A39D'
  } else {
    return color || '#07A39D'
  }
}

export const iconList = {
  'bank-account': (width = 16, height = 12, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666667 0C0.298477 0 0 0.298477 0 0.666667V10.0601C0 11.0651 0.814726 11.8798 1.81974 11.8798H3.57985V10.9871H1.81974C1.30775 10.9871 0.892704 10.5721 0.892704 10.0601V5.27318H15.1073V10.0601C15.1073 10.5721 14.6922 10.9871 14.1803 10.9871H3.57985V11.8798H14.1803C15.1853 11.8798 16 11.0651 16 10.0601V0.666667C16 0.298477 15.7015 0 15.3333 0H0.666667ZM15.1073 3.87976V1.13305H0.892704V3.87976H15.1073Z" fill="${getColor(color)}"/>
      <path d="M11.4335 2.34335C11.4335 2.15372 11.5872 2 11.7768 2H13.8369C14.0265 2 14.1803 2.15372 14.1803 2.34335C14.1803 2.53297 14.0265 2.68669 13.8369 2.68669H11.7768C11.5872 2.68669 11.4335 2.53297 11.4335 2.34335Z" fill="${getColor(color)}"/>
      <path d="M3.33333 9.16667V6.66667H4.28199C4.46107 6.66667 4.6099 6.69515 4.72848 6.75212C4.84787 6.80827 4.93701 6.88517 4.9959 6.98283C5.05559 7.08048 5.08544 7.19116 5.08544 7.31486C5.08544 7.41658 5.06608 7.50366 5.02736 7.57609C4.98864 7.6477 4.9366 7.70589 4.87126 7.75065C4.80592 7.79541 4.73292 7.82755 4.65225 7.84709V7.8715C4.74018 7.87638 4.82448 7.90365 4.90514 7.95329C4.98662 8.00212 5.05317 8.07129 5.1048 8.16081C5.15642 8.25033 5.18224 8.35856 5.18224 8.48551C5.18224 8.61491 5.15118 8.73128 5.08907 8.83463C5.02695 8.93717 4.93338 9.01815 4.80834 9.07755C4.68331 9.13696 4.52601 9.16667 4.33644 9.16667H3.33333ZM3.78225 8.78825H4.26505C4.42799 8.78825 4.54537 8.75692 4.61716 8.69425C4.68976 8.63078 4.72606 8.5494 4.72606 8.45011C4.72606 8.37606 4.70791 8.30933 4.67161 8.24992C4.63531 8.1897 4.58368 8.1425 4.51673 8.10832C4.44977 8.07332 4.36991 8.05583 4.27715 8.05583H3.78225V8.78825ZM3.78225 7.7299H4.22633C4.30377 7.7299 4.37354 7.71566 4.43566 7.68717C4.49777 7.65788 4.54658 7.61678 4.58207 7.56388C4.61837 7.51017 4.63652 7.4467 4.63652 7.37345C4.63652 7.27661 4.60264 7.19686 4.53488 7.1342C4.46793 7.07153 4.3683 7.0402 4.23601 7.0402H3.78225V7.7299Z" fill="${getColor(color)}"/>
      <path d="M6.14656 9.16667H5.66739L6.53982 6.66667H7.094L7.96764 9.16667H7.48847L6.82659 7.17936H6.80723L6.14656 9.16667ZM6.47243 8.18644H7.162L7.28316 8.55021H6.3515L6.47243 8.18644Z" fill="${getColor(color)}"/>
      <path d="M10.5861 6.66667V9.16667H10.1867L9.01908 7.46379H8.99851V9.16667H8.54959V6.66667H8.95132L10.1178 8.37077H10.1396V6.66667H10.5861Z" fill="${getColor(color)}"/>
      <path d="M11.3308 9.16667V6.66667H11.7797V7.81535H11.8099L12.7767 6.66667H13.3249L12.3665 7.78849L13.3333 9.16667H12.7937L12.0543 8.09489L11.7797 8.42204V9.16667H11.3308Z" fill="${getColor(color)}"/>
    </svg>
  `,
  dashboard: (width = 16, height = 16, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.89543 16 0 15.1046 0 14V2ZM2 1.33333C1.63181 1.33333 1.33333 1.63181 1.33333 2V14C1.33333 14.3682 1.63181 14.6667 2 14.6667H8V1.33333H2ZM14 14.6667H9.33333V7.33333H14.6667V14C14.6667 14.3682 14.3682 14.6667 14 14.6667ZM14.6667 6H9.33333V1.33333H14C14.3682 1.33333 14.6667 1.63181 14.6667 2V6Z" fill="${getColor(color)}"/>
    </svg>
  `,
  history: (width = 16, height = 15, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.184984 4.53415C0.420639 4.31345 0.790591 4.32557 1.0113 4.56122L2.80035 6.47146L5.05723 4.51874C5.30139 4.30748 5.67058 4.33416 5.88184 4.57832C6.09309 4.82248 6.06642 5.19167 5.82225 5.40292L3.14036 7.72338C2.90297 7.92878 2.54574 7.91003 2.33116 7.68091L0.157916 5.36047C-0.0627891 5.12481 -0.05067 4.75486 0.184984 4.53415Z" fill="${getColor(color)}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.03539 6.95658C2.12164 5.29217 2.80097 3.6512 4.07242 2.37974C6.80108 -0.348912 11.2249 -0.348912 13.9535 2.37974C16.6822 5.1084 16.6822 9.53217 13.9535 12.2608C12.8074 13.407 11.3606 14.0722 9.867 14.2552C9.54653 14.2945 9.25491 14.0665 9.21565 13.746C9.17638 13.4256 9.40435 13.1339 9.72482 13.0947C10.9686 12.9423 12.1716 12.3892 13.1268 11.4341C15.3988 9.16202 15.3988 5.47855 13.1268 3.2065C10.8547 0.934447 7.17123 0.934448 4.89918 3.2065C3.84001 4.26566 3.2749 5.63023 3.20303 7.01709C3.18632 7.33953 2.91139 7.58737 2.58896 7.57066C2.26652 7.55395 2.01868 7.27902 2.03539 6.95658ZM4.07242 11.4341C4.30073 11.2058 4.67088 11.2058 4.89918 11.4341C5.00174 11.5366 5.1071 11.6345 5.21499 11.7277C5.45933 11.9387 5.48632 12.3079 5.27527 12.5522C5.06422 12.7966 4.69505 12.8236 4.45071 12.6125C4.32131 12.5008 4.19512 12.3835 4.07242 12.2608C3.84412 12.0325 3.84412 11.6624 4.07242 11.4341ZM6.44618 13.2167C6.54736 12.9101 6.87794 12.7436 7.18454 12.8448C7.32387 12.8908 7.46461 12.9313 7.60645 12.9665C7.91982 13.0442 8.11086 13.3613 8.03314 13.6747C7.95542 13.988 7.63837 14.1791 7.325 14.1013C7.15465 14.0591 6.98556 14.0103 6.81812 13.9551C6.51151 13.8539 6.34499 13.5233 6.44618 13.2167Z" fill="${getColor(color)}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.67951 3.36777C9.00238 3.36777 9.26412 3.62951 9.26412 3.95237V7.56279L10.754 8.28088C11.0449 8.42106 11.167 8.77048 11.0268 9.06133C10.8866 9.35218 10.5372 9.47432 10.2464 9.33414L8.42569 8.45662C8.22346 8.35915 8.09491 8.15449 8.09491 7.92999V3.95237C8.09491 3.62951 8.35664 3.36777 8.67951 3.36777Z" fill="${getColor(color)}"/>
    </svg>
  `,
  report: (width = 16, height = 16, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.65517 0C1.21619 0 0.795194 0.174384 0.484789 0.484789C0.174384 0.795194 0 1.21619 0 1.65517V14.3448C0 14.7838 0.174384 15.2048 0.484789 15.5152C0.795194 15.8256 1.21619 16 1.65517 16H14.3448C14.7838 16 15.2048 15.8256 15.5152 15.5152C15.8256 15.2048 16 14.7838 16 14.3448V1.65517C16 1.21619 15.8256 0.795194 15.5152 0.484789C15.2048 0.174384 14.7838 0 14.3448 0H1.65517ZM1.10345 1.65517C1.10345 1.50885 1.16158 1.36851 1.26504 1.26504C1.36851 1.16158 1.50885 1.10345 1.65517 1.10345H14.3448C14.4912 1.10345 14.6315 1.16158 14.735 1.26504C14.8384 1.36851 14.8966 1.50885 14.8966 1.65517V14.3448C14.8966 14.4912 14.8384 14.6315 14.735 14.735C14.6315 14.8384 14.4912 14.8966 14.3448 14.8966H1.65517C1.50885 14.8966 1.36851 14.8384 1.26504 14.735C1.16158 14.6315 1.10345 14.4912 1.10345 14.3448V1.65517Z" fill="${getColor(color)}"/>
      <path d="M4 8H5.33333V12.6667H4V8Z" fill="${getColor(color)}"/>
      <path d="M10.6667 6H12V12.6667H10.6667V6Z" fill="${getColor(color)}"/>
      <path d="M7.33333 3.33333H8.66667V12.6667H7.33333V3.33333Z" fill="${getColor(color)}"/>
    </svg>
  `,
  support: (width = 16, height = 16, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0969 6.54173H12.9504V5.96933C12.9504 3.31175 10.7802 1.1448 8.11873 1.1448C5.45723 1.1448 3.28708 3.31175 3.28708 5.96933V6.54173H2.14058V5.96933C2.14058 2.67121 4.82939 0 8.11873 0C11.4081 0 14.0969 2.68484 14.0969 5.96933V6.54173Z" fill="${getColor(color)}"/>
      <path d="M2.6184 12.3612C1.54014 12.3612 0.666626 11.489 0.666626 10.4123V7.86378C0.666626 6.78712 1.54014 5.91489 2.6184 5.91489C3.69665 5.91489 4.57017 6.78712 4.57017 7.86378V10.426C4.57017 11.489 3.69665 12.3612 2.6184 12.3612ZM2.6184 7.05969C2.18164 7.05969 1.81312 7.41403 1.81312 7.86378V10.426C1.81312 10.8621 2.16799 11.23 2.6184 11.23C3.06881 11.23 3.42368 10.8757 3.42368 10.426V7.86378C3.42368 7.41403 3.05516 7.05969 2.6184 7.05969Z" fill="${getColor(color)}"/>
      <path d="M13.6193 12.3612C12.5411 12.3612 11.6675 11.489 11.6675 10.4123V7.86378C11.6675 6.78712 12.5411 5.91489 13.6193 5.91489C14.6976 5.91489 15.5711 6.78712 15.5711 7.86378V10.426C15.5711 11.489 14.6976 12.3612 13.6193 12.3612ZM13.6193 7.05969C13.1826 7.05969 12.814 7.41403 12.814 7.86378V10.426C12.814 10.8621 13.1689 11.23 13.6193 11.23C14.0561 11.23 14.4246 10.8757 14.4246 10.426V7.86378C14.4109 7.41403 14.0561 7.05969 13.6193 7.05969Z" fill="${getColor(color)}"/>
      <path d="M11.3399 16H7.39544V14.8552H11.3399C12.3363 14.8552 13.1552 14.0511 13.1552 13.0426V11.6252H14.3017V13.029C14.3017 14.6644 12.9778 16 11.3399 16Z" fill="${getColor(color)}"/>
    </svg>
  `,
  trade: (width = 16, height = 15, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5682 7.74119H0.578139C0.260163 7.74119 0 7.98904 0 8.29196C0 8.59489 0.260163 8.84274 0.578139 8.84274H8.13731L6.89431 9.98559C6.66305 10.1921 6.66305 10.5501 6.87985 10.7704C7.09666 10.9908 7.47245 10.9908 7.7037 10.7842L9.9729 8.69127C10.1463 8.53981 10.1897 8.29196 10.103 8.08542C10.0163 7.87888 9.79946 7.74119 9.5682 7.74119Z" fill="${getColor(color)}"/>
      <path d="M2.90509 3.32121C2.76055 3.32121 2.61602 3.37629 2.50039 3.47267L0.231196 5.56561C0.0577539 5.71708 0.0143943 5.96492 0.101115 6.17146C0.187836 6.378 0.40464 6.5157 0.635896 6.5157H9.62596C9.94393 6.5157 10.2041 6.26785 10.2041 5.96492C10.2041 5.662 9.94393 5.41415 9.62596 5.41415H2.06679L3.30979 4.2713C3.54105 4.06475 3.54105 3.70675 3.32424 3.48644C3.20862 3.37629 3.04962 3.32121 2.90509 3.32121Z" fill="${getColor(color)}"/>
      <path d="M8.80217 0.333252C7.00994 0.333252 5.4056 1.7928 4.63957 4.14737C4.53839 4.43652 4.71183 4.75322 5.01536 4.83583C5.31888 4.93222 5.65131 4.76699 5.73803 4.47783C6.34508 2.63274 7.54472 1.4348 8.80217 1.4348C10.6956 1.4348 12.2855 4.06475 12.2855 7.19039C12.2855 10.316 10.6956 12.946 8.80217 12.946C7.58808 12.946 6.44625 11.8582 5.8103 10.1095C5.70912 9.82034 5.37669 9.66888 5.07317 9.76527C4.76965 9.86165 4.61066 10.1783 4.71183 10.4675C5.52123 12.6706 7.08221 14.0475 8.80217 14.0475C11.4038 14.0475 13.4417 11.032 13.4417 7.19039C13.4417 3.34874 11.4183 0.333252 8.80217 0.333252Z" fill="${getColor(color)}"/>
      <path d="M11.3604 0.333252H8.62873C8.31075 0.333252 8.05059 0.581101 8.05059 0.884027C8.05059 1.18695 8.31075 1.4348 8.62873 1.4348H11.3604C13.2538 1.4348 14.8437 4.06475 14.8437 7.19039C14.8437 10.316 13.2538 12.946 11.3604 12.946H8.62873C8.31075 12.946 8.05059 13.1938 8.05059 13.4968C8.05059 13.7997 8.31075 14.0475 8.62873 14.0475H11.3604C13.9621 14.0475 16 11.032 16 7.19039C16 3.34874 13.9621 0.333252 11.3604 0.333252Z" fill="${getColor(color)}"/>
    </svg>
  `,
  wallet: (width = 16, height = 15, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.79626 0.666748C1.5497 0.666789 1.30579 0.716823 1.07972 0.813737C0.853647 0.910651 0.650251 1.05237 0.482197 1.23006C0.314143 1.40776 0.185029 1.61763 0.102895 1.84661C0.0207615 2.07559 -0.0126333 2.31876 0.00479005 2.561C0.00173481 2.58474 0.000135204 2.60864 0 2.63256V12.265C0 12.9428 0.273358 13.5928 0.759939 14.0721C1.24652 14.5513 1.90647 14.8206 2.59459 14.8206H12.5738C13.1561 14.8206 13.7145 14.5928 14.1262 14.1872C14.5379 13.7817 14.7692 13.2317 14.7692 12.6582L14.7692 10.9709C15.449 10.9709 16 10.4281 16 9.75863V8.54638C16 7.87687 15.449 7.33413 14.7692 7.33413L14.7692 5.18812C14.7694 4.6827 14.5898 4.1932 14.2617 3.80464C13.9335 3.41608 13.4776 3.153 12.973 3.06111V2.82914C12.973 2.25564 12.7417 1.70563 12.3299 1.3001C11.9182 0.894571 11.3598 0.666748 10.7775 0.666748H1.79626ZM13.5717 5.18812C13.5717 4.64555 13.1247 4.20521 12.5738 4.20521H1.79626C1.5863 4.20521 1.38511 4.16983 1.19751 4.10456V12.265C1.19751 12.63 1.3447 12.98 1.6067 13.2381C1.86871 13.4961 2.22406 13.6411 2.59459 13.6411H12.5738C13.1247 13.6411 13.5717 13.2008 13.5717 12.6582V10.9709H11.6923C11.0126 10.9709 10.4615 10.4281 10.4615 9.75863V8.54638C10.4615 7.87687 11.0126 7.33413 11.6923 7.33413H13.5717V5.18812ZM14.7692 10.0011C14.9052 10.0011 15.0154 9.89253 15.0154 9.75863V8.54638C15.0154 8.41248 14.9052 8.30393 14.7692 8.30393H11.6923C11.5564 8.30393 11.4462 8.41248 11.4462 8.54638V9.75863C11.4462 9.89253 11.5564 10.0011 11.6923 10.0011H14.7692ZM11.3935 2.05592C11.2238 1.92459 11.0099 1.84624 10.7775 1.84624H1.79626C1.63746 1.84624 1.48516 1.90837 1.37288 2.01897C1.26059 2.12957 1.19751 2.27957 1.19751 2.43598C1.19751 2.59239 1.26059 2.74239 1.37288 2.85299C1.48516 2.96359 1.63746 3.02572 1.79626 3.02572H11.7755V2.82914C11.7755 2.51545 11.626 2.23593 11.3935 2.05592Z" fill="${getColor(color)}"/>
    </svg>
  `,
  eye: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" fill="${getColor(color)}" />
    </svg>
  `,
  logout: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" fill="${getColor(color)}" />
    </svg>
  `,
  close: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="${getColor(color)}" />
    </svg>
  `,
  menu: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" fill="${getColor(color)}" />
    </svg>
  `,
  account: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" fill="${getColor(color)}" />
    </svg>
  `,
  check: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="${getColor(color)}" />
    </svg>
  `,
  alert: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="${getColor(color)}" />
    </svg>
  `,
  fingerprint: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z" fill="${getColor(color)}" />
    </svg>
  `,
  passport: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M12,5A5,5 0 0,1 17,10A5,5 0 0,1 12,15A5,5 0 0,1 7,10A5,5 0 0,1 12,5M12,6C11.59,6.62 11.25,7.29 11.04,8H12.96C12.75,7.29 12.42,6.62 12,6M10.7,6.22C9.78,6.53 9,7.17 8.54,8H10C10.18,7.38 10.4,6.78 10.7,6.22M13.29,6.22C13.59,6.78 13.82,7.38 14,8H15.46C15,7.17 14.21,6.54 13.29,6.22M8.13,9C8.05,9.32 8,9.65 8,10C8,10.35 8.05,10.68 8.13,11H9.82C9.78,10.67 9.75,10.34 9.75,10C9.75,9.66 9.78,9.33 9.82,9H8.13M10.83,9C10.78,9.32 10.75,9.66 10.75,10C10.75,10.34 10.78,10.67 10.83,11H13.17C13.21,10.67 13.25,10.34 13.25,10C13.25,9.66 13.21,9.32 13.17,9H10.83M14.18,9C14.22,9.33 14.25,9.66 14.25,10C14.25,10.34 14.22,10.67 14.18,11H15.87C15.95,10.68 16,10.35 16,10C16,9.65 15.95,9.32 15.87,9H14.18M8.54,12C9,12.83 9.78,13.46 10.7,13.78C10.4,13.22 10.18,12.63 10,12H8.54M11.04,12C11.25,12.72 11.59,13.38 12,14C12.42,13.38 12.75,12.72 12.96,12H11.04M14,12C13.82,12.63 13.59,13.22 13.29,13.78C14.21,13.46 15,12.83 15.46,12H14M7,17H17V19H7V17Z" fill="${getColor(color)}" />
    </svg>
  `,
  cash: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.1 4 20 4M15 10H11V11H14C14.55 11 15 11.45 15 12V15C15 15.55 14.55 16 14 16H13V17H11V16H9V14H13V13H10C9.45 13 9 12.55 9 12V9C9 8.45 9.45 8 10 8H11V7H13V8H15V10Z" fill="${getColor(color)}" />
    </svg>
  `,
  card: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14" fill="${getColor(color)}" />
    </svg>
  `,
  settings: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" fill="${getColor(color)}" />
    </svg>
  `,
  upload: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" fill="${getColor(color)}" />
    </svg>
  `,
  download: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" fill="${getColor(color)}" />
    </svg>
  `,
  back: (width = 24, height = 24, color = '#5F666F') => `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" fill="${getColor(color)}" />
    </svg>
  `,
}
