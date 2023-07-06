import GameSizeProvider from './hooks/GameSize'

// import LoadingScreen from './components/LoadingScreen'
import Game from './components/Game'

const App = () => {

	return (
		<GameSizeProvider>
			{/* <LoadingScreen /> */}
			<Game />
		</GameSizeProvider>
	)
}

export default App