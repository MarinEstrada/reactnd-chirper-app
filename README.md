# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

Most of the commits in this repository correspond to videos in the program.

## How to run this My Reads project locally

First clone the project from desired repo
To see current state:
* clone from MarinEstrada page `git@github.com:MarinEstrada/reactnd-chirper-app.git`
To see original starter state
* clone the Project from original Udacity page - `git@github.com:udacity/reactnd-chirper-app.git`

This project runs locally on "localhost:3000/" using
* npm (Node Package Manager)
* Docker

### Using npm
* install all project dependencies with:
`npm install`
* start the development server with:
`npm start`

### Using Docker
To start the app locally run:
`docker-compose up -d`

To download extra needed dependencies run:
`bash add_dependencies.sh {dependency_name}`

To take a look at the logs:
`docker-compose logs -f`

To tear the containers down
`docker-compose down`

## Contributing

Because this is a code-along project and the commits correspond to specific videos in the program, Udacity will not be accepting pull requests.

If you feel like there's a major problem, please open an issue on the Udacity repo to discuss the problem and potential resolution.

## License

MIT
