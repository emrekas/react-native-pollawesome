const uuidv4 = () => `_${Math.random().toString(36).substr(2, 9)}`;

// eslint-disable-next-line import/prefer-default-export
export const VotingList: {
  id: string;
  title: string;
  createdBy: string;
  date: string;
}[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'Lorem Ipsum is simply dummy text of the industry.sadasdasdasdasdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    createdBy: 'Emre',
    date: new Date().toLocaleDateString(),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    createdBy: 'Emre',
    date: new Date().toLocaleDateString(),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    createdBy: 'Emre',
    date: new Date().toLocaleDateString(),
  },
];

export const VoteList: {
  id: string;
  votingId: string;
  title: string;
  count: number;
}[] = [
  {
    id: uuidv4(),
    votingId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'option1',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'option2',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'option3',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'option4',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'option5',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'option1',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'option2',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'option3',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'option4',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'option5',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'option1',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'option2',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'option3',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'option4',
    count: 0,
  },
  {
    id: uuidv4(),
    votingId: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'option5',
    count: 0,
  },
];
