# wurst

The thing is under development. Please come back later.

Now you can explore https://github.com/bessarabov/curry which is ready.

## build:

    time docker build --tag wurst .

## run:

    docker run \
        --publish 15000:80 \
        -e 'SERVER=https://curry.example.com' \
        -e 'TOKEN=3qagL6jllc' \
        --name wurst \
        wurst

## lint:

    cd app
    npm install
    npm run lint
