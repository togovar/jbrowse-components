import React from 'react'
import { LoadingEllipses } from '@jbrowse/core/ui'
import { BlockMsg } from '@jbrowse/plugin-linear-genome-view'
import { makeStyles } from 'tss-react/mui'
import { observer } from 'mobx-react'

// local
import { LinearReadCloudDisplayModel } from '../LinearReadCloudDisplay/model'
import { LinearReadArcsDisplayModel } from '../LinearReadArcsDisplay/model'

const useStyles = makeStyles()(theme => {
  const bg = theme.palette.action.disabledBackground
  return {
    loading: {
      backgroundColor: theme.palette.background.default,
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, ${bg} 5px, ${bg} 10px)`,
      position: 'absolute',
      bottom: 0,
      height: 50,
      width: 300,
      right: 0,
      pointerEvents: 'none',
      textAlign: 'center',
    },
  }
})

export default observer(function ({
  model,
  children,
}: {
  model: LinearReadArcsDisplayModel | LinearReadCloudDisplayModel
  children?: React.ReactNode
}) {
  const { drawn, loading, error, regionTooLarge } = model
  return error ? (
    <BlockMsg
      message={`${error}`}
      severity="error"
      buttonText="Reload"
      action={model.reload}
    />
  ) : regionTooLarge ? (
    model.regionCannotBeRendered()
  ) : (
    // this data-testid is located here because changing props on the canvas
    // itself is very sensitive to triggering ref invalidation
    <div data-testid={`drawn-${drawn}`}>
      {children}
      {loading ? <LoadingBar model={model} /> : null}
    </div>
  )
})

const LoadingBar = observer(function LoadingBar({
  model,
}: {
  model: LinearReadArcsDisplayModel | LinearReadCloudDisplayModel
}) {
  const { classes } = useStyles()
  return (
    <div className={classes.loading}>
      <LoadingEllipses message={model.message} />
    </div>
  )
})