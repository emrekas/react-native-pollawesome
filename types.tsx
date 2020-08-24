export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Login: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  // VotingNavigator: { itemId: string };
  VoteScreen: { itemId: string };
  ResultScreen: { voteId: string };
};

export type VotingParamList = {
  HomeScreen: undefined;
  VoteScreen: { itemId: string };
  ResultScreen: { voteId: string };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
