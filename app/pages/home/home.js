import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import "./home.scss";
import ImageStack from "../../components/image-stack/ImageStack";
import { Modal, Image, Header, Icon, Button } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";
import DataService from "../../services/DataService";
import ImageLoader from "../../components/image-loader/ImageLoader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      items: [],
      currentPage: 0,
      limit: 25,
      count: 0,
      nextPage: null
    };
  }
  componentDidMount() {
    this.loadData(0, 25);
  }
  render() {
    const listItems = this.state.items.map((item, key) => {
      return (
         <div className="list-image-item" key={key} >
          <ImageLoader src={item} />
        </div>
      );
    });
    return (
      <div className="home-component">
        <div className="stack-item">
          <ImageStack
            data={{ images: [] }}
            onClick={() => {
              this.showModal();
            }}
          />
        </div>
        <div className="stack-item">
          <ImageStack
            data={{ images: [] }}
            onClick={() => {
              this.showModal();
            }}
          />
        </div>
        <div className="stack-item">
          <ImageStack
            data={{ images: [] }}
            onClick={() => {
              this.showModal();
            }}
          />
        </div>
        <div className="stack-item">
          <ImageStack
            data={{ images: [] }}
            onClick={() => {
              this.showModal();
            }}
          />
        </div>
        <div className="stack-item">
          <ImageStack
            data={{ images: [] }}
            onClick={() => {
              this.showModal();
            }}
          />
        </div>

        <div className="modal-infinity-loader">
          <Modal open={this.state.openModal}>
            <Modal.Header>Image Carousel</Modal.Header>
            <Modal.Content image scrolling>
              <Modal.Description>
                <div id="scrollableDiv">
                  <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={() => {
                      this.loadData();
                    }}
                    hasMore={this.state.nextPage}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                    scrollableTarget="scrollableDiv"
                  >
                    <div className="list-images">{listItems}</div>
                  </InfiniteScroll>
                </div>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                primary
                onClick={() => {
                  this.showModal();
                }}
              >
                Close
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
  showModal() {
    console.log("show hide modal");
    const status = !this.state.openModal;
    this.setState({
      openModal: status
    });
  }

  loadData(currentPage, limit) {
    if (!currentPage) {
      currentPage = this.state.currentPage;
    }
    if (!limit) {
      limit = this.state.limit;
    }
    const data = DataService.getData(currentPage, limit);
    console.log("Data: ", data);
    const list = this.state.items.concat(data.list);
    this.setState(
      {
        items: list,
        currentPage: data.currentPage + 1,
        limit: data.limit,
        count: data.count,
        nextPage: data.nextPage
      },
      () => {
        console.log("this.state: ", this.state);
      }
    );
  }
}

Home.propTypes = {};

export default Home;
