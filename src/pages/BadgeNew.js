import React from 'react'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }
  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })
    try {
      await api.badges.create(this.state.form)
      this.setState({
        loading: false
      })
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img
            className='BadgeNew__hero-img img-fluid'
            src={header}
            alt='logo'
          ></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
                twitter={this.state.form.twitter || 'TWITTER'}
                email={this.state.form.email || 'EMAIL'}
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew
