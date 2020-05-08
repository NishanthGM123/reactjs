import React from 'react';
import AvatarList from './AvatharList';

const URL="https://api.github.com/search/users?q=a"
class Home extends React.Component {
  constructor() {
      super()

      this.state={
        totalCount: '',
        avatarData: [],
        isFetching: false,

      }
  }

  componentDidMount() {
    this.setState({
        loading:true
    })
    fetch(URL)
    .then(response => response.json())
    .then(avatars =>
        
        this.setState({
            loading:false,
            avatarData:avatars.items,
            totalCount:avatars.total_count
            
            }
        )
        
    )

  }

  render() {
    const { isFetching, avatarData, totalCount } = this.state;
    return (
        <div>
            {isFetching && <div>Loading....</div>}
     <AvatarList avatarDataList={avatarData} totalCount={totalCount} /> 
    
    
            
        </div>
    )
}
}





export default Home