import { fetchFeaturedProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'

const FeaturedProducts: React.FC = async () => {
  const products = await fetchFeaturedProducts()
  if (!products || products.length === 0)
    return <EmptyList heading="No featured products found." />

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  )
}

export default FeaturedProducts
