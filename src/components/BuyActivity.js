import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import './Activity.scss';
import {Jumbotron} from "react-bootstrap"
 class BuyActivity extends Component {
    getData(){
        return {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: Object.values(this.getLabelsAndColors())
            }],
            labels: Object.keys(this.getLabelsAndColors())
        };
    }

    getOptions(){
        return {
            responsive: true,
            maintainAspectRatio: true
        }
    }

    getLegend(){
        return {
            position: 'bottom'
        };
    }

    getLabelsAndColors() {
        return {
            'Red': '#FF6384',
            'Blue': '#36A2EB',
            'Yellow': '#FFCE56'
        }
    }

    render(){
        let data = this.getData();
        return (
            <Jumbotron fluid>
                <div className="doughnut-container">
                    <div className="doughnut-wrapper">
                        <h3 className="activity-title">Bid Activity</h3>
                        <Doughnut
                            data={data}
                            width={300}
                            height={300}
                            options={this.getOptions()}
                            legend={this.getLegend()}
                        />
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default BuyActivity;
