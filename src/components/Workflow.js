import React, { Component } from 'react';
import Header from './Header';
import Board from 'react-trello';

import data from '../config/data';

const handleDragStart = (cardId, laneId) => {
    console.log('drag started');
    console.log(`cardId: ${cardId}`);
    console.log(`laneId: ${laneId}`)
};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended');
    console.log(`cardId: ${cardId}`);
    console.log(`sourceLaneId: ${sourceLaneId}`);
    console.log(`targetLaneId: ${targetLaneId}`)
};

class Workflow extends Component {
    state = {boardData: {lanes: []}};

    setEventBus = eventBus => {
        this.setState({eventBus})
    };

    async componentWillMount() {
        const response = await this.getBoard();
        this.setState({boardData: response})
    }

    getBoard() {
        return new Promise(resolve => {
            resolve(data)
        })
    }

    completeCard = () => {
        this.state.eventBus.publish({
            type: 'ADD_CARD',
            laneId: 'COMPLETED',
            card: {id: 'Milk', title: 'Buy Milk', label: '15 mins', description: 'Use Headspace app'}
        });
        this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: 'Milk'})
    };

    addCard = () => {
        this.state.eventBus.publish({
            type: 'ADD_CARD',
            laneId: 'BLOCKED',
            card: {id: 'Ec2Error', title: 'EC2 Instance Down', label: '30 mins', description: 'Main EC2 instance down'}
        })
    };

    shouldReceiveNewData = nextData => {
        console.log('New card has been added');
        console.log(nextData)
    };

    handleCardAdd = (card, laneId) => {
        console.log(`New card added to lane ${laneId}`);
        console.dir(card)
    };
    render() {
        return (
            <div>
                <Header>
                <section>
                    <Board
                        editable
                        onCardAdd={this.handleCardAdd}
                        data={data}
                        draggable
                        onDataChange={this.shouldReceiveNewData}
                        eventBusHandle={this.setEventBus}
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                        style={{display: "flex", justifyContent: "center", flexFlow: "row wrap", background: "transparent"}}
                    />
                </section>
                </Header>
            </div>
        );
    }
}

export default Workflow;