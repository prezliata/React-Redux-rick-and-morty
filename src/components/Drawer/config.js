import TvIcon from '@material-ui/icons/Tv';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

export const drawer = [
	{
		name: 'Characters',
        link: '/',
        iconComponent: TvIcon,
    },
	{
		name: 'Episodes',
        link: '/episodes',
        iconComponent: LiveTvIcon,
    },
    {
		name: 'Locations',
        link: '/locations',
        iconComponent: LocationOnIcon,
    },
    {
		name: 'My watch list',
        link: '/myWatchList',
        iconComponent: PlaylistPlayIcon,
    }
];