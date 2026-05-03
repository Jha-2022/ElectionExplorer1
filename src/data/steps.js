export const STEPS = [
  {
    num: '01', badge: 'Step 1', title: 'Voter Registration',
    intro: 'The first step in participating in any election is ensuring you are eligible and registered.',
    cards: [
      { hue: 210, icon: 'check-square', title: 'Check Eligibility', text: 'Confirm you meet age and citizenship requirements to participate in the election.' },
      { hue: 250, icon: 'file-text', title: 'Submit Application', text: 'Register online, by mail, or in person at designated offices before the deadline.' },
      { hue: 170, icon: 'shield', title: 'Verify Status', text: 'Ensure your information is up to date before the registration deadline closes.' },
    ]
  },
  {
    num: '02', badge: 'Step 2', title: 'The Primary Season & Caucuses',
    intro: 'Before the general election, political parties select their single best candidate.',
    cards: [
      { hue: 340, icon: 'grid', title: 'Primaries', text: 'Voters go to a polling station and cast a secret ballot to choose their preferred candidate.' },
      { hue: 30, icon: 'users', title: 'Caucuses', text: 'Local members of a political party gather for a public meeting to discuss and vote on candidates.' },
      { hue: 270, icon: 'user-plus', title: 'Delegates', text: 'These votes determine how many "delegates" a candidate receives for the National Convention.' },
    ]
  },
  {
    num: '03', badge: 'Step 3', title: 'National Conventions',
    intro: 'Parties officially nominate their candidates for President and Vice President.',
    two: true,
    cards: [
      { hue: 45, icon: 'award', title: 'The Ticket', text: 'The Presidential nominee selects a running mate (Vice President), forming the official ticket for the general election ballot.' },
      { hue: 190, icon: 'book-open', title: 'The Platform', text: 'The party outlines its official goals and positions on key issues, forming the campaign blueprint.' },
    ]
  },
  {
    num: '04', badge: 'Step 4', title: 'General Election Campaign',
    intro: 'Candidates travel the country, participate in debates, and run advertisements to explain their vision.',
    two: true,
    cards: [
      { hue: 150, icon: 'home', title: 'Town Halls', text: 'Direct interaction between candidates and citizens, providing voters the opportunity to ask questions.' },
      { hue: 0, icon: 'message-square', title: 'Debates', text: "Televised events where candidates discuss policy and challenge each other's records side-by-side." },
    ]
  },
  {
    num: '05', badge: 'Step 5', title: 'Casting Your Vote',
    intro: 'On Election Day (or during early voting periods), citizens cast their final ballots.',
    two: true,
    cards: [
      { hue: 220, icon: 'mail', title: 'Mail-in Ballots', text: 'Sent via post for those who cannot attend in person, ensuring accessibility for every eligible voter.' },
      { hue: 120, icon: 'shield-check', title: 'In-Person Voting', text: 'Conducted at local schools, community centers, or government buildings — the traditional cornerstone of democracy.' },
    ]
  },
  {
    num: '06', badge: 'Step 6', title: 'The Electoral College',
    intro: 'The President is not chosen by the direct popular vote, but by a group of electors.',
    two: true, hasWidget: true,
    cards: [
      { hue: 290, icon: 'map-pin', title: 'Allotment', text: 'Each state gets a certain number of electors based on its population, reflecting proportional representation.' },
      { hue: 50, icon: 'star', title: 'Winning', text: 'A candidate needs a majority of 270 out of 538 electoral votes to win the presidency.' },
    ]
  },
  {
    num: '07', badge: 'Step 7', title: 'Inauguration',
    intro: 'The winning candidate is sworn into office, marking the official start of their term.',
    two: true,
    cards: [
      { hue: 200, icon: 'calendar', title: 'January 20th', text: 'Traditionally held on the 20th of January, inaugurations mark the peaceful transfer of power.' },
      { hue: 10, icon: 'coffee', title: 'Oath of Office', text: 'The President-elect pledges to preserve, protect, and defend the Constitution of the United States.' },
    ]
  },
];
