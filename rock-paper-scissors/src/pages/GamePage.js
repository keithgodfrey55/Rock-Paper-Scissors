import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissor from "../images/scissor.png";
import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardContent } from "@mui/material";
import "../css/gamepage.css";

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlayerTurn: true,
      winCount: 0,
      lossCount: 0,
      playerChoice: null,
      cpuChoice: null,
      choices: {
        rock: "rock",
        paper: "paper",
        scissor: "scissor",
      },
      message: "",
    };
  }
  selectChoiceRock(event) {
    event.preventDefault();
    if (this.state.isPlayerTurn === true) {
      this.setState({ playerChoice: "rock", isPlayerTurn: false });
      this.cpuRandomSelection();
      console.log(this.state.playerChoice);
      return;
    }
  }
  selectChoicePaper(event) {
    event.preventDefault();
    if (this.state.isPlayerTurn === true) {
      this.setState({ playerChoice: "paper", isPlayerTurn: false });
      this.cpuRandomSelection();
      console.log(this.state.playerChoice);
      return;
    }
  }
  selectChoiceScissor(event) {
    event.preventDefault();
    if (this.state.isPlayerTurn === true) {
      this.setState({ playerChoice: "scissor", isPlayerTurn: false });
      this.cpuRandomSelection();
      console.log(this.state.playerChoice);
      return;
    }
  }
  checkSelection(event) {
    event.preventDefault();
    console.log(this.state.playerChoice);
    if (this.state.playerChoice && this.state.cpuChoice) {
      if (this.state.playerChoice === this.state.cpuChoice) {
        this.setState({ message: "IT'S A TIE!" });
        this.clearSelection();
      } else if (
        this.state.playerChoice === "rock" &&
        this.state.cpuChoice === "scissor"
      ) {
        this.setState({
          winCount: this.state.winCount + 1,
          message: "YOU WIN",
        });
        this.clearSelection();
      } else if (
        this.state.playerChoice === "paper" &&
        this.state.cpuChoice === "rock"
      ) {
        this.setState({
          winCount: this.state.winCount + 1,
          message: "YOU WIN",
        });
        this.clearSelection();
      } else if (
        this.state.playerChoice === "scissor" &&
        this.state.cpuChoice === "paper"
      ) {
        this.setState({
          winCount: this.state.winCount + 1,
          message: "YOU WIN",
        });
        this.clearSelection();
      } else {
        this.setState({
          lossCount: this.state.lossCount + 1,
          message: "YOU LOSE",
        });
        this.clearSelection();
      }
    } else {
      return;
    }
  }
  cpuRandomSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      this.setState({ cpuChoice: this.state.choices.rock, isPlayerTurn: true });
    } else if (randomNumber === 1) {
      this.setState({
        cpuChoice: this.state.choices.paper,
        isPlayerTurn: true,
      });
    } else {
      this.setState({
        cpuChoice: this.state.choices.scissor,
        isPlayerTurn: true,
      });
    }
  }
  clearSelection() {
    this.setState({ playerChoice: null, cpuChoice: null });
  }

  render() {
    return (
      <div className="Gamepage">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item align="center" xs={12}>
            {" "}
            <h1 className="Title">Rock Paper Scissors</h1>
          </Grid>
          <Grid item align="center" xs={12}>
            {" "}
            <h1>{this.state.message}</h1>
          </Grid>
        </Grid>
        <div>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            className="GridScpacingChoices"
          >
            <Grid item align="center" xs={12} sm={12} md={4}>
              <Card
                variant="outlined"
                elevation={1}
                sx={{ maxWidth: 200, backgroundColor:'aliceblue' }}
                className="Choices"
                onClick={(event) => {
                  this.selectChoicePaper(event);
                }}
              >
                <CardContent>
                  <img src={paper} alt="paper" height="100px" width="100px" />
                </CardContent>
                <Button>
                  <Typography>Choose Paper</Typography>
                </Button>
              </Card>
            </Grid>
            <Grid item align="center" xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                elevation={1}
                sx={{ maxWidth: 200, backgroundColor:'aliceblue' }}
                className="Choices"
                onClick={(event) => {
                  this.selectChoiceRock(event);
                }}
              >
                <CardContent>
                  <img src={rock} alt="rock" height="100px" width="100px" />
                </CardContent>
                <Button>
                  <Typography>Choose Rock</Typography>
                </Button>
              </Card>
            </Grid>
            <Grid item align="center" xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                elevation={1}
                sx={{ maxWidth: 200, backgroundColor:'aliceblue' }}
                className="Choices"
                onClick={(event) => {
                  this.selectChoiceScissor(event);
                }}
              >
                <CardContent>
                  <img
                    src={scissor}
                    alt="scissor"
                    height="100px"
                    width="100px"
                  />
                </CardContent>
                <Button>
                  <Typography>Choose Scissor</Typography>
                </Button>
              </Card>
            </Grid>
          </Grid>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="GridSpacingButton"
        >
          <Button
            sx={{color: 'rgb(70, 115, 213)', backgroundColor:'aliceblue'}}
            className="Button"
            onClick={(event) => {
              this.checkSelection(event);
            }}
          >
            SHOOT!
          </Button>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item align="center" xs={3}>
            <Card align="center" variant="outlined" sx={{ maxWidth: 150 }}>
              <CardContent>
                <h3>Wins: {this.state.winCount}</h3>
                <h3>Loss: {this.state.lossCount}</h3>
                <h4>Choice: {this.state.playerChoice}</h4>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GamePage;
