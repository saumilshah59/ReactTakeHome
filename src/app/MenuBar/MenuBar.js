import { AppBar, makeStyles, CssBaseline, Toolbar, Typography, Button, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';
import * as allActions from '../../store/actions'
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchInput from '../SearchInput';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "60px"
  },
  appbar: {
    backgroundColor: "#383838",
    position: "fixed",
    minHeight: "60px"
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuToggle: {
    position: "fixed",
    right: 0,
    display: "none",
    "@media (max-width: 800px)": {
      display: "block"
    }
  },
  inputContainer: {
    border: '1px solid white',
    padding: '0px 10px 0px 10px',
    borderRadius: '10px',
    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))'
  },
  input: {
    color: 'white',
  },
  iconButton: {
    color: 'white',
    padding: '6px'
  }
}));

function MenuBar(props) {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const searchQuery = useSelector(state => state.search_query);

  return ( 
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <CssBaseline />
        <Toolbar className={classes.toolbar}>
            <div className={classes.title}>
              <Typography variant='h6'>Item Search</Typography>
              <Typography variant='subtitle1'>{data.length} Items</Typography>
            </div>
            <div style={{flex: 1}}></div>
            <SearchInput
                placeholder="Enter Item Numbers"
                value={searchQuery}
                onChange={(query) => {
                  dispatch(allActions.updateSearchQuery(query))
                }}
                onSubmit={() => {
                  dispatch(allActions.fetchOrders())
                }}
            >
            </SearchInput>
            <Filter className={classes.menuToggle} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;
