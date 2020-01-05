import React, { Component } from 'react'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    modalIsOpen: false,
    data: undefined
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, error: null, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }
  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }
  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null })
    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.props.history.push('/badges')
      this.setState({ loading: false, error: null })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      />
    )
  }
}

export default BadgeDetailsContainer
