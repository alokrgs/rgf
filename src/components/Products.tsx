import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const allProducts = [
  { id: 1, name: 'Mozuku Product 1', price: 1200, category: 'Food', image: '/images/mozuku1.jpg' },
  { id: 2, name: 'Mozuku Product 2', price: 1500, category: 'Food', image: '/images/mozuku2.jpg' },
  { id: 3, name: 'Mozuku Soap', price: 1800, category: 'Soap', image: '/images/mozuku3.jpg' },
  { id: 4, name: 'Mozuku Cosmetic 1', price: 2200, category: 'Cosmetics', image: '/images/mozuku4.jpg' },
  { id: 5, name: 'Mozuku Product 3', price: 1300, category: 'Food', image: '/images/mozuku5.jpg' },
  { id: 6, name: 'Mozuku Soap 2', price: 2000, category: 'Soap', image: '/images/mozuku6.jpg' },
  { id: 7, name: 'Mozuku Cosmetic 2', price: 2500, category: 'Cosmetics', image: '/images/mozuku7.jpg' },
  { id: 8, name: 'Mozuku Product 4', price: 1700, category: 'Food', image: '/images/mozuku8.jpg' },
  { id: 9, name: 'Mozuku Product 5', price: 1600, category: 'Food', image: '/images/mozuku9.jpg' },
  { id: 10, name: 'Mozuku Soap 3', price: 2100, category: 'Soap', image: '/images/mozuku10.jpg' },
  { id: 11, name: 'Mozuku Cosmetic 3', price: 2700, category: 'Cosmetics', image: '/images/mozuku11.jpg' },
  { id: 12, name: 'Mozuku Product 6', price: 1400, category: 'Food', image: '/images/mozuku12.jpg' },
  // ...add more as needed
];

const categories = ['All', 'Food', 'Soap', 'Cosmetics'];
const pageSizes = [10, 50, 100, 500];

const Products: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  // Filter products
  const filtered = allProducts.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) ||
     String(p.price).includes(search) ||
     p.category.toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section id="products" className="py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">{t('products_title') || 'Products'}</h2>
            <p className="lead">{t('products_subtitle') || 'Browse our Mozuku products'}</p>
          </Col>
        </Row>
        <Row className="mb-4 align-items-end">
          <Col md={4} className="mb-2 mb-md-0">
            <InputGroup>
              <Form.Control
                placeholder="Search by name, price, or category"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
            </InputGroup>
          </Col>
          <Col md={3} className="mb-2 mb-md-0">
            <Form.Select value={category} onChange={e => { setCategory(e.target.value); setPage(1); }}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </Form.Select>
          </Col>
          <Col md={2} className="mb-2 mb-md-0">
            <Form.Select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}>
              {pageSizes.map(size => <option key={size} value={size}>{size} / page</option>)}
            </Form.Select>
          </Col>
          <Col md={3} className="text-end">
            <span className="text-muted">{filtered.length} results</span>
          </Col>
        </Row>
        <Row className="g-4">
          {paginated.map(product => (
            <Col key={product.id} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '220px', background: '#f5f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'cover', borderRadius: '12px' }}
                    onError={e => (e.currentTarget.src = '/images/placeholder.png')}
                  />
                </div>
                <Card.Body>
                  <h4 className="h5 mb-2">{product.name}</h4>
                  <div className="mb-2"><strong>¥{product.price.toLocaleString()}</strong></div>
                  <div className="mb-2"><span className="badge bg-primary">{product.category}</span></div>
                  <Button variant="success" className="w-100">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Pagination Controls */}
        <Row className="mt-4">
          <Col className="d-flex justify-content-center align-items-center gap-2">
            <Button variant="outline-secondary" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>&laquo; Prev</Button>
            <span>Page {page} of {totalPages}</span>
            <Button variant="outline-secondary" size="sm" disabled={page === totalPages || totalPages === 0} onClick={() => setPage(page + 1)}>Next &raquo;</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products; 